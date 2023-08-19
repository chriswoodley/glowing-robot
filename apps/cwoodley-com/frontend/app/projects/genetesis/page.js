'use client';

import React from 'react';
import {
  Image,
  AspectRatioContainer,
} from '@cw/design-system';
import Project from 'components/project';
import ProjectTitle from 'components/project-title';

function GenetesisPage() {
  return (
    <Project
      title={(
        <ProjectTitle
          title="Genetesis"
          subtitle="cardioflux.genetesis.com"
        />
      )}
      image={(
        <AspectRatioContainer
          size="xlg"
          ratio="2/1"
        >
          <Image
            src="../projects/genetesis-com.png"
            alt="Genetesis"
            width="1761"
            height="1307"
            fill
          />
        </AspectRatioContainer>
      )}
    >
      <p>
        Cardioflux Genetesis Portal exist to help physician’s create Magnetocardiography (MCG){' '}
        Scan orders that are available for Cardioflux Device Operators. Once the Operator{' '}
        performs the scan the results are sent back to the portal where physicians can review{' '}
        and determine what the best course of action to take with the patient. Physicians{' '}
        receive text notifications when results become available or at specific time intervals{' '}
        set by the physician. The primary goals of this application are:
      </p>

      <ul>
        <li>
          Efficiently create and review MCG scans
        </li>
        <li>
          Performant and easy to use
        </li>
        <li>
          Customize when to receive notifications
        </li>
        <li>
          Made for desktop use
        </li>
      </ul>

      <h2>
        Front-end Software Engineer Role
      </h2>

      <p>
        While employed at Genetesis I developed the User Interface (UI) for both Operator{' '}
        software and Cardioflux Genetesis Portal. My role as Front-end Software Engineer:
      </p>

      <ul>
        <li>
          Write modular code to create the Site Reader application which helps doctors view and{' '}
          determine the prognosis of Magnetocardiograph (MCG) scans conducted on patients{' '}
          experiencing chest pain.
        </li>
        <li>
          Learn how to utilize Electron and Vue.js together to create the Operator application{' '}
          that supports the operation of the CardioFlux MCG medical device.
        </li>
        <li>
          Utilize the Vue.js Javascript framework, Storybook.js and SCSS to create a Shared{' '}
          User Interface (UI) library containing re-usable components, directives, mixins,{' '}
          filters, utility functions, and SCSS mixins.
        </li>
        <li>
          Create a back-end PDF service to dynamically generate PDF documents using Puppeteer{' '}
          and NodeJS.
        </li>
        <li>
          Write Front-end Unit Tests for Vue.js components and Vuex Store Modules using Jest.
        </li>
        <li>
          Facilitate creating workflows around Agile Methodologies and SCRUM.
        </li>
      </ul>

      <h2>
        Challenges
      </h2>

      <ul className="mb-4">
        <li>
          The organization lacked an agile process. My previous experiences with working in{' '}
          an agile environment has allowed me to cultivate the agile process within the{' '}
          organization. The team now does standup meetings every other day, backlog grooming,{' '}
          sprint planning, and sprint reviews.
        </li>
        <li>
          The business has multiple applications. Branding and continuity between applications{' '}
          was a concern. I solved this problem by creating a separate shared UI library that{' '}
          included global SCSS mixins and variables,  global stylesheet, Vue.js components, {' '}
          mixins, filters, and general utility functions that all applications share.
        </li>
        <li>
          Due to deadlines, the team decided to use Element UI component library to help fill{' '}
          in time gaps. If we decide to add style or functional behavior modifications to these{' '}
          components we would not be able to do them directly. I solved this problem by{' '}
          creating “Transparent Wrapper Components” to wrap all of the Element UI components{' '}
          which allowed the team to indirectly add styles and behaviors to the components.
        </li>
        <li>
          Initially the applications were created before the Vue CLI was released. The problem{' '}
          is they lacked structure and proper tooling that the Vue CLI provided out of the box.{' '}
          I solve this problem by recreating each application using the Vue CLI. Additionally, {' '}
          I have setup local git hooks to run unit tests and lint the code on pre-push.
        </li>
        <li>
          Due to deadlines, the team was not able to write unit tests that should be written{' '}
          along-side the code that was produced. Once the clinical versions of the applications{' '}
          were released, I helped guide the team with a strategy and implementation of writing{' '}
          unit tests.
        </li>
      </ul>
    </Project>
  );
}

export default GenetesisPage;
