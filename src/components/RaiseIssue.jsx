import React from 'react';
import { Input, Textarea, Select, FileInput, Button } from './Form';

const RaiseIssue = () => {
  return (
    <div className="flex flex-col gap-8 w-full lg:w-2/3 mx-auto">
      <div className="flex flex-wrap justify-between gap-3">
        <div className="flex min-w-72 flex-col gap-2">
          <p className="text-4xl font-black tracking-[-0.033em]">Raise Your Voice</p>
          <p className="text-muted-light dark:text-muted-dark text-base font-normal">Create a new post to highlight a social or local issue in your community.</p>
        </div>
      </div>
      <div className="flex flex-col gap-8 bg-white dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl p-6 sm:p-8">
        <div>
          <h3 className="text-lg font-bold tracking-[-0.015em] pb-2">1. What is the issue?</h3>
          <div className="flex flex-col gap-6 pt-4">
            <Input label="Title" placeholder="e.g., Unsafe Road Conditions on MG Road" />
            <Textarea label="Description" placeholder="Describe the issue with as much detail as possible..." />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold tracking-[-0.015em] pb-2">2. Provide Evidence</h3>
          <p className="text-sm text-muted-light dark:text-muted-dark pb-4">Add photos, videos, or documents as proof.</p>
          <FileInput />
        </div>
        <div>
          <h3 className="text-lg font-bold tracking-[-0.015em] pb-2">3. Details & Categorization</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <Select label="Category">
              <option>Select a category</option>
              <option>Environment</option>
              <option>Health & Sanitation</option>
              <option>Governance & Corruption</option>
              <option>Infrastructure</option>
              <option>Public Safety</option>
            </Select>
            <Input label="Location" placeholder="Search for a location..." />
            <div className="md:col-span-2">
              <Input label="Tag Authorities" placeholder="Start typing to tag..." />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-6 border-t border-border-light dark:border-border-dark">
          <Button>Save as Draft</Button>
          <Button primary>Submit Issue</Button>
        </div>
      </div>
    </div>
  );
};

export default RaiseIssue;
