"use client";

import React from 'react';
import { ContactIcon } from '../../../atoms/Global/FooterSection/ContactIcon';

export const ContactInfo = () => {
  // Use `const` to let TypeScript infer the literal types
  const contacts = [
    { type: 'phone', value: '00 (123) 456 889' },
    { type: 'email', value: 'contact@example.com' },
    { type: 'address', value: '583 Main Street, NY, USA' },
  ] as const; // Use `as const` to tell TypeScript to infer the exact literal types

  return (
    <div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
        Contact
      </h3>
      {contacts.map((contact, index) => (
        <div
          key={index}
          style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}
        >
          <ContactIcon type={contact.type} />
          <span style={{ fontSize: '0.875rem', color: '#d1d5db' }}>
            {contact.value}
          </span>
        </div>
      ))}
    </div>
  );
};
