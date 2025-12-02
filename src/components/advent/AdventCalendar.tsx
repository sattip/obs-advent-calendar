'use client';

import React, { useState, useEffect } from 'react';
import Door from './Door';
import DoorContent from './DoorContent';
import { DayData } from '@/types/advent';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface AdventCalendarProps {
  days: DayData[];
}

export default function AdventCalendar({ days }: AdventCalendarProps) {
  const [openedDoors, setOpenedDoors] = useLocalStorage<number[]>(
    'obs-advent-opened-doors',
    []
  );
  const [selectedDay, setSelectedDay] = useState<DayData | null>(null);

  const isDoorUnlocked = (day: number): boolean => {
    // For testing, unlock all doors
    // In production, check if the current date is >= the door's date
    const today = new Date();
    const doorDate = new Date(`2024-12-${day.toString().padStart(2, '0')}`);
    return today >= doorDate;
  };

  const isDoorOpen = (day: number): boolean => {
    return openedDoors.includes(day);
  };

  const handleDoorOpen = (day: number) => {
    if (!openedDoors.includes(day)) {
      setOpenedDoors([...openedDoors, day]);
    }
    const dayData = days.find((d) => d.day === day);
    if (dayData) {
      setSelectedDay(dayData);
    }
  };

  const handleCloseContent = () => {
    setSelectedDay(null);
  };

  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 p-4 max-w-7xl mx-auto">
        {days.map((dayData) => (
          <Door
            key={dayData.day}
            day={dayData.day}
            title={dayData.titleShort}
            content={dayData.description}
            isUnlocked={isDoorUnlocked(dayData.day)}
            isOpen={isDoorOpen(dayData.day)}
            onOpen={handleDoorOpen}
            type={dayData.type}
          />
        ))}
      </div>

      {/* Door Content Modal */}
      {selectedDay && (
        <DoorContent data={selectedDay} onClose={handleCloseContent} />
      )}
    </>
  );
}
