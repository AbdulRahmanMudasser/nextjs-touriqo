'use client';

import { useEffect } from 'react';

const GUESTS = [
  {
    adults: 3,
    children: [10, 10],
  },
];

export default function TestHotelSearch() {
  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const params = new URLSearchParams({
          checkin: '2025-06-05',
          checkout: '2025-06-07',
          residency: 'gb',
          language: 'en',
          currency: 'EUR',
          longitude: '139.6503',
          latitude: '35.6762',
          radius: '150',
        });

        // Flatten guests array into query params
        GUESTS.forEach((guest, i) => {
          params.set(`guests[${i}][adults]`, String(guest.adults));
          guest.children.forEach((age, j) => {
            params.set(`guests[${i}][children][${j}]`, String(age));
          });
        });

        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const endpoint = '/v1/hotel/search';
        const url = `${baseUrl}${endpoint}?${params.toString()}`;

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`API error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('✅ Hotel data:', data);
      } catch (error) {
        console.error('❌ Fetch failed:', error);
      }
    };

    fetchHotelData();
  }, []);

  return <div className="p-4 text-sm text-gray-700">Running hotel search test... (check DevTools Console)</div>;
}
