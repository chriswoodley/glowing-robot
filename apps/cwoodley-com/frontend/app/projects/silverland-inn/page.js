'use client';

import React from 'react';
import { Image, AspectRatioContainer } from '@cw/design-system';
import Project from 'components/project';
import ProjectTitle from 'components/project-title';

function SilverlandInnPage() {
  return (
    <Project
      title={(
        <ProjectTitle
          title="Silverland Inn & Suites"
          subtitle="silverlandusa.com"
        />
      )}
      image={(
        <AspectRatioContainer
          size="xlg"
          ratio="2/1"
        >
          <Image
            src="../projects/silverlandusa-com.png"
            alt="Silverland Inn & Suites"
            width="1263"
            height="929"
            fill
          />
        </AspectRatioContainer>
      )}
    >
      <p>
        Silverland Inn &amp; Suites website showcases Specials, Rooms and Suites, Hotel{' '}
        Amenities, Groups and Events, and a City Guide for the primary goal of generating{' '}
        hotel bookings.
      </p>

      <h2>
        Full Stack Developer Role
      </h2>

      <ul>
        <li>
          Created Photoshop wireframes for the graphic designer to apply the visual design.
        </li>
        <li>
          Front-end development of the design utilizing the blueprint CSS framework.
        </li>
        <li>
          Used jQuery and jQuery UI libraries to integrate the datepicker widget and form{' '}
          validation into the Reservation form.
        </li>
        <li>
          Integrated PHP scripts to interact with the 3rd party booking API used by the{' '}
          reservation form.
        </li>
        <li>
          Relational database design and back-end development of the Special Offers module.{' '}
          This central application was used to create and display scheduled special offers{' '}
          through a RESTful API built with the CakePHP framework. The XML response was handled{' '}
          by PHP&apos;s built in SimpleXML class.
        </li>
        <li>
          Relational Database design and back-end development of the City Guide module. This{' '}
          module was a part of the same system that the Special Offers module was built upon.{' '}
          Incorporated the Google Maps API to display brick and mortar establishments within{' '}
          a pre-defined radius centered on the location of Silverland Inn &amp; Suites.
        </li>
      </ul>

      <h2>
        Production Manager Role
      </h2>

      <ul>
        <li>
          Responsible for delegating tasks to team members in expediting the completion of{' '}
          the website.
        </li>
        <li>
          Oversaw periodic website updates that was delegated to team members.
        </li>
        <li>
          Performed quality assurance tasks related to the launch of the site.
        </li>
      </ul>

      <h2>
        Challenges
      </h2>

      <ul>
        <li>
          Most websites had a similar structure and a repetitive code base. I have discovered{' '}
          and introduced frameworks to reduce the build-out time and cost the website.
        </li>
        <li>
          One of the challenges associated with blueprint CSS is making sure the final design{' '}
          aligned perfectly with the 24 column grid structure. To solve this problem I overlay{' '}
          the grid on top of the wireframe before handing it off to the Graphic Designer.{' '}
          This process made it easy to slice pixel perfect graphics from the final design to code.
        </li>
        <li>
          At the time CakePHP was one of the most regarded frameworks and I had no knowledge{' '}of
          Object Oriented Programming or the Model View Controller (MVC) design pattern.{' '}
          Learning the framework required extensive use of their documentation and writing the{' '}
          code I needed to complete the Special Offers and City Guide Modules.
        </li>
      </ul>

      <h2>
        What I Have Learned
      </h2>

      <ul className="mb-4">
        <li>
          I learned that incorporating frameworks into my workflow can cut development time{' '}
          down. I also learn that its important to know why and how the framework works so{' '}
          troubleshoot or customize the application the way you want to.
        </li>
        <li>
          I learned the MVC design pattern including how Routing and URL Rewriting works.{' '}
          Models are used for modeling data which is then passed into the controllers and then{' '}
          output to the View. Controllers are also used to pass input into the Models. The{' '}
          purpose of the pattern is to organize logic, data, and output so that your code base{' '}
          is easier to manage and maintain.
        </li>
        <li>
          I learned how PHP Classes work including public and private methods and properties{' '}
          and how to access them.
        </li>
        <li>
          As a production manager, I learned that team members have their own ways of doing{' '}
          things and I learned to have an open mind.
        </li>
      </ul>
  </Project>
  );
}

export default SilverlandInnPage;
