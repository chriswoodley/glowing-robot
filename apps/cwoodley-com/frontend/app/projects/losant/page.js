'use client';

import React from 'react';
import {
  Image,
  AspectRatioContainer
} from '@cw/design-system';
import Project from 'components/project';
import ProjectTitle from 'components/project-title';

function LosantPage() {
  return (
    <Project
      title={(
        <ProjectTitle
          title="Losant IoT Platform"
          subtitle="app.losant.com"
          url="https://app.losant.com"
        />
      )}
      image={(
        <AspectRatioContainer
          size="xlg"
          ratio="2/1"
        >
        <Image
          src="../projects/losant-com-workflow-1280.png"
          alt="Losant"
          width="1280"
          height="836"
          fill
        />
      </AspectRatioContainer>
      )}
    >
      <p>
        Losant&apos;s enterprise IoT Platform enables customers to create experiences with{' '}
        connected IoT devices using the platform&apos;s low code workflow engine. Examples{' '}
        of the types of solutions customers can build are (but not limited to):
      </p>

      <ul>
        <li>Asset Tracking</li>
        <li>Conditioned-based Maintenance</li>
        <li>Environmental, Social and Governance</li>
        <li>Smart Environments</li>
      </ul>

      <h2>Lead Front-end Software Engineer Role</h2>

      <p>
        After 2 years as a Senior Front-end Software Engineer at Losant, I was promoted to{' '}
        Lead Front-end Software Engineer. While having the responsibilities of a Senior{' '}
        Front-end Software Engineer, I am responsible for leading the Front-end Software{' '}
        Engineering team and keeping them engaged with development of new features and{' '}
        platform maintenance. My role as a Lead Front-end Software Engineer:
      </p>

      <ul>
        <li>
          Work remotely with Developers and Engineering Managers to deliver best{' '}
          implementation of features for the Internet of Things (IoT) platform.
        </li>
        <li>
          Develop new features and continually maintain and enhance existing functionality{' '}
          of the IoT platform.
        </li>
        <li>
          Work with the Director of Product to design and develop a Design System used to{' '}
          unify the User Interface of the IoT platform.
        </li>
        <li>
          Coordinate work among team members.
        </li>
        <li>
          Execute team guidelines for software testing.
        </li>
        <li>
          Engage with each team member through weekly meetings to provide team and{' '}
          engineering updates.
        </li>
        <li>
          Coach Junior and Intern level team members.
        </li>
        <li>
          Facilitate career growth for each team member based on their career interests.
        </li>
      </ul>

      <h3>Challenges</h3>

      <p>
        I was responsible for library upgrades which introduced various challenges. For{' '}
        example, upgrading to React 18 from React 17 required handling many deprecation’s{' '}
        within the code such as the use of string refs, unsafe methods, and{' '}
        <code>findDomNode</code>. React 18 also made the Enzyme testing library obsolete{' '}
        and many unit tests were written with Enzyme. I spearheaded and delegated the{' '}
        effort to handle both code deprecation’s and to migrate Enzyme tests over to the{' '}
        React Testing Library.
      </p>

      <p>
        I was also responsible for maintaining our Front-end build tools. The Losant{' '}
        Platform used Webpack 4 for local and production environment builds for many years.{' '}
        The Webpack plugins became obsolete. To ensure the continuity of Losant’s platform,{' '}
        I had the challenge of upgrading to Webpack 5. Through careful understanding of{' '}
        Webpack’s documentation and information that was available on the web, I was able to{' '}
        migrate the configurations for each environment. In that process, I was able to{' '}
        upgrade all of the Webpack plugins that were being used.
      </p>

      <p>
        Other than library upgrades and maintaining build tools, I was responsible for ensuring{' '}
        that our Unit Tests were healthy. The platform’s front-end component Unit Tests did{' '}
        not mock API requests. The Unit Tests also did not tear down Fake Timers or handle{' '}
        Promises after each test has completed. As a result, Jest errors, timeouts, and{' '}
        random test failures occurred during test runs.
      </p>

      <p>
        I worked with other Engineers on my team to apply testing best practices on a case by{' '}
        case basis. One strategy I used was to ensure that all Redux Actions were mocked out.{' '}
        By doing that the Thunk middleware would not run causing API requests to be fired.{' '}
        Another strategy I used is to ensure we were testing Class based React components while{' '}
        not using the Redux connect method. Finally, another strategy was to throw an error{' '}
        when a test intercepted an outgoing requests.
      </p>

      <p>
        To address the Unit Test tear down issues, I implemented a global setup file to handle{' '}
        common cases such as detecting when Jest is using fake timers and to run all pending{' '}
        timers after each test. Other strategies include ensuring React component state{' '}
        updates do not happen after the test has completed by awaiting the final visual state{' '}
        of the React component.
      </p>


      <h2>Senior Front-end Software Engineer Role</h2>

      <p>
        As a Senior Front-end Software Engineer at Losant, I developed new features for the{' '}
        platform. The Instance Manager is one such feature that allows customers to manage{' '}
        multiple organizations used within a single enterprise company. It is intended for{' '}
        use by Administrators at a large scale, Resellers, Losant partners, and Enterprise{' '}
        customers that have a private installation of the Losant Platform. Apart from adding{' '}
        new features to the platform, I am responsible for the overall maintenance of the{' '}
        User Interface. My role as Senior Front-end Software Engineer:
      </p>

      <ul>
        <li>
          Become knowledgeable of the IoT platform that combines the collection and{' '}
          visualization of data with edge computing and integration of connected devices{' '}
          that provide enterprises with data insights.
        </li>
        <li>
          Follow business requirements to develop software features that enables customers{' '}
          to build IoT workflows that are meaningful to their application using JavaScript{' '}
          and React.
        </li>
        <li>
          Research and quickly resolve IoT Platform User Interface defects.
        </li>
        <li>
          Write front-end unit tests for React components using the React Testing Library{' '}
          and Jest.
        </li>
        <li>
          Perform code reviews to ensure quality and style standards set by the development{' '}
          team are met.
        </li>
      </ul>
    </Project>
  );
}

export default LosantPage;
