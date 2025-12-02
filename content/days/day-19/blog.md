---
title: "Ημέρα 19: B2B Τιμές ανά Ρόλο | OBS Advent Calendar 2024"
description: "Complete guide για role-based B2B pricing στο WooCommerce. Wholesale τιμές, tier-based discounts, και custom pricing strategies για different customer segments."
date: "2024-12-19"
day: 19
type: "ai-tip"
keywords: ["b2b pricing", "wholesale woocommerce", "role based pricing"]
author: "OBS Technologies"
---

# B2B Τιμές ανά Ρόλο: Πώς να Πουλάς στα Ίδια Προϊόντα σε Διαφορετικές Τιμές Legally & Profitably

Φαντάσου: Ένας retail πελάτης αγοράζει 1 τεμάχιο στα €50. Ένας wholesaler αγοράζει 100 τεμάχια - θα του χρεώσεις €50/τεμάχιο; Φυσικά όχι - θα του δώσεις wholesale τιμή (π.χ. €35/τεμάχιο). Ένας VIP πελάτης που αγοράζει €10k/μήνα - θα πληρώνει τις ίδιες τιμές με έναν one-time buyer; Πάλι όχι - deserve ειδική μεταχείριση. Αλλά πώς manage αυτή την complexity; Διαφορετικά eshops για κάθε segment; Manual invoicing; Google Sheets με custom prices; Όλα αυτά είναι nightmares. Στη δέκατη ένατη ημέρα του OBS Advent Calendar, θα μάθεις πώς να implement sophisticated role-based pricing στο WooCommerce: Automatic price adjustments βάσει customer role, tier-based discounts που scale με volume, catalog-wide rules που apply instantly, και seamless B2C + B2B operations στο ίδιο eshop. Από την pricing strategy έως την technical implementation και tax compliance, θα χτίσεις complete B2B pricing system που handles complexity automatically. Welcome to one eshop, infinite pricing possibilities.

## Γιατί το Role-Based Pricing είναι Essential για Modern eCommerce

Τα days του "one price fits all" τελείωσαν. Different customers έχουν different value propositions:

**Retail Customers (B2C):**
- Αγοράζουν small quantities (1-5 units)
- Willing να πληρώσουν retail markup
- Αναμένουν convenience (free shipping, easy returns, support)
- Your margin: Υψηλό (30-50%+)

**Wholesale Customers (B2B):**
- Αγοράζουν bulk quantities (50-1000+ units)
- Expect wholesale discount (20-40% off retail)
- Δεν χρειάζονται fancy marketing ή extensive support
- Your margin: Lower per unit (15-25%), αλλά massive volume compensates

**VIP/Enterprise Customers:**
- Ultra-high lifetime value (€10k-100k+/year)
- Negotiate custom pricing based on volume commitments
- Require dedicated support, custom terms (NET 30/60 payment)
- Your margin: Variable, αλλά το volume και loyalty justify special treatment

**Distributor Partners:**
- Buy με πολύ μεγάλα volumes για resale
- Τιμές near-wholesale cost + minimal markup
- Long-term partnerships με contracts

Αν treat όλους τους customers το ίδιο, you lose: 1) **Retail margins** (αν δώσεις σε όλους wholesale prices), 2) **Wholesale customers** (αν όλοι πληρώνουν retail, οι B2B buyers πάνε αλλού), 3) **Competitive edge** (competitors που offer tiered pricing θα steal τα best accounts σου).

**Role-based pricing solves this:** Κάθε customer segment βλέπει τις δικές του τιμές automatically, βάσει το role/tier του. Το ίδιο product, multiple price points, zero manual work.

## Η Αρχιτεκτονική του B2B Pricing System

Ένα complete role-based pricing system αποτελείται από multiple layers:

### Layer 1: Customer Roles/Tiers

Define customer segments με WordPress user roles:

**Default Roles:**
- **Customer:** Regular retail buyers (B2C) - full retail price
- **Subscriber:** Newsletter members - 5% discount (loyalty perk)

**Custom B2B Roles (θα τα δημιουργήσεις):**
- **Wholesale:** Small wholesale buyers (10-50 units/order) - 20% discount
- **Premium Wholesale:** Medium wholesale (50-200 units/order) - 30% discount
- **Distributor:** Large volume partners (200+ units/order) - 40% discount
- **VIP:** High lifetime value customers - custom pricing + perks

Κάθε customer assign σε ένα role. Το WooCommerce check το role και adjust τιμές accordingly.

### Layer 2: Pricing Rules

Define πώς οι τιμές adjust για κάθε role:

**Rule Types:**

**1. Percentage Discount:**
"Wholesale customers get 20% off all products"
```
IF user_role == 'wholesale'
  THEN price = regular_price × 0.80
```

**2. Fixed Amount Discount:**
"VIP customers get €10 off all orders over €100"
```
IF user_role == 'vip' AND cart_total > 100
  THEN cart_total = cart_total - 10
```

**3. Tiered Pricing:**
"Distributors: 1-50 units = 30% off, 51-200 = 40% off, 201+ = 50% off"
```
IF user_role == 'distributor'
  IF quantity <= 50: price = regular_price × 0.70
  ELSE IF quantity <= 200: price = regular_price × 0.60
  ELSE: price = regular_price × 0.50
```

**4. Custom Price per Product:**
"Product X for Wholesale A = €35, for Wholesale B = €32"
(Stored σε product meta data)

### Layer 3: Visibility Rules

Κάποιες φορές, δεν θέλεις όλοι οι customers να βλέπουν όλα τα products:

**Catalog Restrictions:**
- B2C customers: Βλέπουν consumer products μόνο
- B2B customers: Βλέπουν bulk packs, commercial-grade items
- Distributors: Access σε entire catalog including trade-only items

**Price Display:**
- Guest users: "Login to see prices" (common σε B2B)
- Retail customers: See full retail prices
- Wholesale: See discounted prices immediately

### Layer 4: Payment & Tax Rules

Different segments έχουν different payment options:

**Payment Methods by Role:**
- Retail: Credit card, PayPal (instant payment)
- Wholesale: Credit card, bank transfer, NET 15 terms
- VIP/Distributor: NET 30/60 payment terms (invoice later)

**Tax Handling:**
- B2C (individuals): Include VAT σε displayed prices
- B2B με valid VAT ID: Display prices excluding VAT (reverse charge)

## Step-by-Step Implementation στο WooCommerce

Ας build complete B2B pricing system:

### Βήμα 1: Create Custom User Roles

Install "Members" plugin (για user role management) ή use code.

**Via Plugin:**
1. Install & Activate "Members" plugin
2. Navigate: Users → Roles → Add New Role
3. Create roles: Wholesale, Premium Wholesale, Distributor, VIP
4. Assign capabilities: Same as "Customer" role (can shop, view orders, etc.)

**Via Code (functions.php):**
```php
function obs_add_custom_roles() {
    // Wholesale role
    add_role('wholesale', 'Wholesale Customer', array(
        'read' => true,
        'edit_posts' => false,
        'delete_posts' => false,
    ));

    // Premium Wholesale role
    add_role('premium_wholesale', 'Premium Wholesale', array(
        'read' => true,
        'edit_posts' => false,
    ));

    // Distributor role
    add_role('distributor', 'Distributor', array(
        'read' => true,
        'edit_posts' => false,
    ));
}
add_action('init', 'obs_add_custom_roles');
```

Run once (activate το theme/plugin), έπειτα comment out (δεν χρειάζεται να run κάθε φορά).

### Βήμα 2: Setup Role-Based Pricing Plugin

**Option A: Use "Wholesale Suite" (Recommended)**

Ένα από τα best WooCommerce B2B plugins:

1. Install "WooCommerce Wholesale Prices" (free version) ή "Wholesale Suite" (premium, περισσότερες features)
2. Activate plugin
3. Configure: WooCommerce → Wholesale Prices → Settings

**Settings:**
- Enable wholesale role: Check "Wholesale Customer" role
- Wholesale price input: Στα product edit screens, θα δεις νέο field "Wholesale Price"
- Tax exemption: Enable για wholesale users (αν applicable)
- Minimum order: Set minimum order quantities για wholesale (π.χ. min 10 units)

4. Edit products: Για κάθε product, set "Wholesale Price" (π.χ. Retail = €50, Wholesale = €35)

**Option B: Use "Dynamic Pricing & Discounts" (More flexible)**

1. Install "Dynamic Pricing and Discounts for WooCommerce"
2. Create pricing rules: WooCommerce → Dynamic Pricing → Add Rule

**Example Rule: Wholesale 20% Discount**
```
Rule Name: Wholesale Discount
Type: Cart Discount
Conditions: User Role = Wholesale
Discount: 20% off cart total
```

**Example Rule: Tiered Distributor Pricing**
```
Rule Name: Distributor Volume Pricing
Type: Bulk Quantity Discount
Conditions: User Role = Distributor
Tiers:
  1-50 units: 30% off
  51-200 units: 40% off
  201+ units: 50% off
```

Save rules → Automatically apply σε matching users.

### Βήμα 3: Custom Pricing για Individual Products

Κάποια products χρειάζονται special pricing που δεν follow general rules.

**Add Custom Price Fields:**

Install "Advanced Custom Fields" (ACF) plugin.

Create field group:
- Title: "B2B Custom Prices"
- Location: Post Type = Product
- Fields:
  - Wholesale Price (Number)
  - Premium Wholesale Price (Number)
  - Distributor Price (Number)
  - VIP Price (Number)

**Display Custom Prices με Code:**

```php
function obs_get_role_based_price($product_id) {
    $user = wp_get_current_user();
    $user_role = $user->roles[0] ?? 'customer';

    // Get product
    $product = wc_get_product($product_id);
    $base_price = $product->get_regular_price();

    // Check για custom role-specific price
    $custom_price = get_field($user_role . '_price', $product_id);

    if ($custom_price && $custom_price > 0) {
        return $custom_price; // Use custom price
    }

    // Fallback: Apply percentage discount by role
    switch($user_role) {
        case 'wholesale':
            return $base_price * 0.80; // 20% off
        case 'premium_wholesale':
            return $base_price * 0.70; // 30% off
        case 'distributor':
            return $base_price * 0.60; // 40% off
        case 'vip':
            return $base_price * 0.75; // 25% off
        default:
            return $base_price; // Retail price
    }
}

// Hook into WooCommerce price display
add_filter('woocommerce_product_get_price', 'obs_apply_role_price', 10, 2);
function obs_apply_role_price($price, $product) {
    return obs_get_role_based_price($product->get_id());
}
```

Αυτό το code automatically adjust τις τιμές βάσει το user role όταν browse το site.

### Βήμα 4: Setup Registration & Role Assignment

Wholesale customers χρειάζονται approval process (δεν μπορεί anyone να register ως wholesale).

**Create Wholesale Application Form:**

Use "WPForms" ή "Gravity Forms":

1. Create form: "Wholesale Application"
2. Fields:
   - Company Name
   - VAT Number
   - Business Address
   - Expected Monthly Order Volume
   - Business License Upload
   - Terms & Conditions Acceptance

3. Form submission → Email notification σε admin για review

**Manual Approval Process:**

Admin receives application → Review credentials → Αν approved:
1. Create user account (ή edit existing)
2. Assign role: "Wholesale" (ή appropriate tier βάσει volume)
3. Email customer: "Your wholesale account is approved! Login to see wholesale prices."

**Automatic Approval (Advanced):**

Για fast-track approval με validation:

```php
function obs_auto_approve_wholesale($entry) {
    $vat_number = $entry['vat_number'];

    // Validate VAT number via EU VIES API
    $vat_valid = obs_validate_vat_number($vat_number);

    if ($vat_valid) {
        // Create user
        $user_id = wp_create_user($entry['email'], wp_generate_password());

        // Assign wholesale role
        $user = new WP_User($user_id);
        $user->set_role('wholesale');

        // Send welcome email
        wp_mail($entry['email'], 'Wholesale Account Approved', '...');

        return 'approved';
    } else {
        // Send για manual review
        return 'pending';
    }
}
```

### Βήμα 5: Tax & Compliance Setup

B2B transactions έχουν different tax rules (ειδικά στην EU):

**VAT Exemption για B2B (EU):**

Αν ο wholesale customer έχει valid VAT number και είναι σε διαφορετικό EU country (reverse charge):

Install "EU VAT Number" plugin:

1. WooCommerce → Settings → Tax → EU VAT
2. Enable: "Validate VAT numbers"
3. Rule: "Exempt VAT αν valid B2B VAT number provided"

Στο checkout, wholesale customers enter VAT number → Plugin validate → Αν valid, remove VAT from order.

**Tax Display:**

WooCommerce → Settings → Tax → Tax Options:
- Display prices: "Excluding tax" (for B2B) ή "Including tax" (for B2C)

Solution για mixed audience: Show different displays βάσει user role:

```php
add_filter('woocommerce_tax_display_shop', 'obs_tax_display_by_role');
function obs_tax_display_by_role($tax_display) {
    if (is_user_logged_in()) {
        $user = wp_get_current_user();
        $role = $user->roles[0];

        if (in_array($role, ['wholesale', 'distributor'])) {
            return 'excl'; // Exclude tax για B2B
        }
    }
    return 'incl'; // Include tax για B2C
}
```

### Βήμα 6: Payment Terms για B2B

Wholesale customers συχνά θέλουν invoice payment (όχι instant credit card):

**Setup NET Payment Terms:**

Install "WooCommerce Deposits" ή custom development:

Create custom payment gateway "Invoice (NET 30)":

```php
function obs_add_invoice_payment_gateway($gateways) {
    $gateways[] = 'WC_Gateway_Invoice';
    return $gateways;
}
add_filter('woocommerce_payment_gateways', 'obs_add_invoice_payment_gateway');

class WC_Gateway_Invoice extends WC_Payment_Gateway {
    public function __construct() {
        $this->id = 'invoice';
        $this->method_title = 'Invoice (NET 30)';
        $this->has_fields = false;

        $this->init_form_fields();
        $this->init_settings();
    }

    public function process_payment($order_id) {
        $order = wc_get_order($order_id);

        // Mark order as "on-hold" (pending payment)
        $order->update_status('on-hold', 'Awaiting invoice payment (NET 30)');

        // Generate invoice PDF (use plugin ή custom)
        // Email invoice to customer

        // Return success
        return array(
            'result' => 'success',
            'redirect' => $this->get_return_url($order)
        );
    }
}
```

**Restrict Payment Method by Role:**

```php
add_filter('woocommerce_available_payment_gateways', 'obs_filter_gateways_by_role');
function obs_filter_gateways_by_role($gateways) {
    if (is_user_logged_in()) {
        $user = wp_get_current_user();
        $role = $user->roles[0];

        // Μόνο wholesale+ μπορούν να χρησιμοποιήσουν invoice payment
        if (!in_array($role, ['wholesale', 'premium_wholesale', 'distributor'])) {
            unset($gateways['invoice']);
        }
    } else {
        // Guests δεν βλέπουν invoice option
        unset($gateways['invoice']);
    }

    return $gateways;
}
```

## Advanced: AI-Optimized Dynamic Tiering

Take B2B pricing στο next level με AI που adjust tiers automatically:

**Scenario:** Ένας wholesale customer consistently orders €5k/month για 6 months. Manually promoting σε "Premium Wholesale" tier είναι tedious. Automate it:

```python
# Python script (run monthly via cron)
import requests
from datetime import datetime, timedelta

# Fetch all wholesale customers
customers = get_woocommerce_customers(role='wholesale')

for customer in customers:
    # Calculate 6-month order volume
    six_months_ago = datetime.now() - timedelta(days=180)
    orders = get_customer_orders(customer.id, since=six_months_ago)
    total_spent = sum([order.total for order in orders])
    avg_monthly = total_spent / 6

    # Auto-upgrade based on thresholds
    if avg_monthly > 10000:
        upgrade_customer_role(customer.id, 'distributor')
        send_email(customer.email, 'Congratulations! Upgraded to Distributor pricing')
    elif avg_monthly > 5000:
        upgrade_customer_role(customer.id, 'premium_wholesale')
        send_email(customer.email, 'You qualify for Premium Wholesale pricing!')
```

Customers automatically move up tiers (και get better pricing) όταν qualify - rewarding loyalty automatically.

## Εργαλεία που προτείνουμε

Για complete B2B pricing system:

- **Wholesale Suite:** Best-in-class WooCommerce B2B plugin
- **Dynamic Pricing and Discounts:** Flexible rule-based pricing
- **Advanced Custom Fields (ACF):** Για custom price fields
- **EU VAT Number:** Tax compliance για EU B2B
- **WPForms ή Gravity Forms:** Wholesale application forms
- **Members Plugin:** User role management
- **WooCommerce PDF Invoices:** Generate invoices για NET payment customers
- **Python + WooCommerce API:** Για automated tier management
- **Make.com:** Για workflow automation (approval processes, tier upgrades)

## Case Study: Real-World Implementation

**Ελληνικό eshop που πουλάει οικιακά είδη:**

**Before B2B Pricing:**
- Mixed customers (retail + small shops) όλοι paying retail
- Losing wholesale customers στον competition
- Manual quote process για bulk orders (slow, inconsistent)
- Revenue: €50k/month (90% retail, 10% wholesale)

**After Implementation:**
- Setup 3 tiers: Retail, Wholesale (20% off), Premium Wholesale (30% off)
- Automated application process: Approve wholesale accounts within 24h
- Added minimum order quantities (Wholesale = 20 units minimum)
- Invoice payment για NET 30 (increased order sizes)

**Results (6 months later):**
- Revenue: €85k/month (+70%)
- Customer mix: 60% retail, 40% wholesale (wholesale grew dramatically)
- Average wholesale order: €1,200 (vs €150 retail average)
- Time saved: 15 hours/week (no manual quotes)
- Customer retention: Wholesale customers reorder every 2-3 weeks (vs retail sporadic)

**Key Insight:** Το role-based pricing opened B2B market που previously wasn't served well. Wholesale customers appreciate transparent pricing και easy ordering (vs requesting quotes). Win-win.

## Συμπέρασμα

Το role-based B2B pricing δεν είναι just nice-to-have - είναι competitive necessity αν θέλεις να serve multiple customer segments effectively. Με σωστό implementation, ένα WooCommerce eshop μπορεί να operate ταυτόχρονα σαν B2C retailer και B2B wholesaler - doubling το potential market.

Ξεκίνα σήμερα: Define τα customer segments σου (ποιοι qualify για wholesale? Ποια είναι τα criteria?). Create roles και basic pricing rules (start με simple percentage discounts). Test με 5-10 trusted wholesale customers. Collect feedback. Refine. Μέσα σε μήνα, μπορείς να έχεις fully operational B2B pricing system που attracts νέους customers και increases lifetime value των existing.

Το beauty του WooCommerce είναι ότι support αυτή την complexity out-of-the-box (με τα σωστά plugins και configuration). Μην limit το eshop σου σε single-tier pricing. Unlock multiple revenue streams με intelligent role-based pricing. Your bottom line θα σε ευχαριστήσει.

---

**Αύριο στο Advent Calendar:** Μαθαίνουμε πώς να train AI models με τα δικά σου business data - custom AI που καταλαβαίνει το brand σου!

*Follow το OBS Advent Calendar καθημερινά για cutting-edge strategies!*
