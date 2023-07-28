'use client';

import React from 'react';
import { Image, AspectRatioContainer } from '@cw/design-system';

function FopConnectPage() {
  return (
    <div>
      <AspectRatioContainer
        size="xlg"
        ratio="2/1"
      >
        <Image
          src="../projects/fopconnect-com.png"
          alt="FOP Connect"
          width="1263"
          height="929"
          fill
        />
      </AspectRatioContainer>

      <p>
        FOPConnect features online content derived from the FOP Journal quarterly magazine{' '}
        intended for members of the National Fraternal Order of Police (NFOP).
      </p>

      <p>
        The goals of this website were to:
      </p>

      <ul>
        <li>
          Build an online social community to connect members of the NFOP.
        </li>
        <li>
          Offer exclusive content to members of the NFOP.
        </li>
        <li>
          Provide content on small screen devices.
        </li>
        <li>
          Offer NFOP members a chance to win during limited time sweepstakes.
        </li>
        <li>
          Sell advertising space for law enforcement related advertisers.
        </li>
        <li>
          Collect opt-ins for e-newsletter distribution through website membership signup.
        </li>
      </ul>

      <h2>Full Stack Developer Role</h2>

      <ul>
        <li>
          Front-end development of a WordPress theme incorporating responsive layout techniques.
        </li>
        <li>
          Back-end development of PHP scripts to transfer over 50,000 NFOP members from PHPFox{' '}
          to the WordPress CMS.
        </li>
        <li>
          Back-end development of a verification system that verified users who register or{' '}
          login into fopconnect.com against a separate database containing valid members of the NFOP.
        </li>
        <li>
          Back-end development of a reporting application that allowed membership data based{' '}
          on chosen criteria(s) to be downloaded from the WordPress database.
        </li>
        <li>
          Performed periodic website updates and create various quarterly HTML e-newsletters.
        </li>
      </ul>

      <h2>
        Challenges
      </h2>

      <ul>
        <li>
          Picking the right CMS. Compared WordPress, Joomla, and Drupal. Chose WordPress{' '}
          because of its large community and support.
        </li>
        <li>
          Learning WordPress theme development. Relied on the WordPress Codex.
        </li>
        <li>
          Researching actively developed plugins that included functionality that{' '}
          complemented the goals of the website. Made great use of WordPress plugin repository{' '}
          and WPMUDEV.
        </li>
        <li>
          Familiarizing myself with all of the filters and actions to customize WordPress{' '}
          functionality and output. Relied on the WordPress Codex.
        </li>
        <li>
          Incorporating Twitter Bootstrap CSS framework into my workflow and creating the{' '}
          responsive theme. Understood how it all worked by relying on the Twitter{' '}
          Bootstrap documentation.
        </li>
        <li>
          Serving ads using Google DoubleClick for Publishers (DFP) to a responsive website.{' '}
          Discovered I could serve ads using the Non-JavaScript method. This allowed me make{' '}
          use of the max-width CSS property to automatically resize the ads on small devices.
        </li>
        <li>
          Learning Sass functions, mixins, variables, placeholder, extends and import{' '}
          functions during the development the website. Relied on the documentation.
        </li>
        <li>
          Verifying member signup and logins against an extra database layer. Used various{' '}
          WordPress and BuddyPress hooks to query the databases and to verify users who are{' '}
          members of the NFOP. Used MySQL prepared statements for extra security.
        </li>
        <li>
          Learning PHPFox and WordPress database schema in order to develop a PHP script that{' '}
          transferred existing members from PHPFox to WordPress. Relied on PHPMyAdmin to{' '}
          study the tables primary and foreign key relationships in both systems.
        </li>
        <li>
          Managing member e-newsletter opt-ins through BuddyPress custom profile fields.{' '}
          The opt-in&apos;s were not managed by a 3rd party solution such as MailChimp,{' '}
          iContact, or Constant Contact. The solution was to build a custom reporting app{' '}
          that exported users based on what e-newsletters they were subscribed to. The list{' '}
          was then used for e-newsletter distribution.
        </li>
      </ul>

      <h2>What I Have Learned</h2>

      <ul>
        <li>
          Criteria&apos;s that should be considered while choosing a CMS such as documentation,{' '}
          user and developer community, open source versus commercial and overall acceptance.
        </li>
        <li>
          WordPress theme development including the understanding of the template hierarchy,{' '}
          template tags, filters, and actions.
        </li>
        <li>
          Twitter Bootstrap CSS Framework. After, I have finished the project I realized this{' '}
          framework included a lot of unused CSS which created a lot of bloat. This caused to{' '}
          me learn what makes a website responsive and to build{' '}
          <a
            href="https://github.com/chriswoodley/style-guide"
            title="Chris Woodley Style Guide - GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            my own responsive pattern library
          </a>.
        </li>
        <li>
          Basic knowledge Sass. I also learned that I shouldn&apos;t nest my CSS selectors more{' '}
          the three levels deep due to maintenance, bloat, and specificity issues.
        </li>
        <li>
          Google DFP Ad server and how to serve the ads onto the website. Responsive ad units{' '}
          at the time were non-existent. However, I discovered a non-JavaScript method to{' '}
          serving the ads which allowed me make use of the max-width CSS property.
        </li>
      </ul>

      <p>
        In closing, this was one of my favorite projects to work on since I was able to level{' '}
        up my skills by diving deep into real world problems surrounding mobile and desktop{' '}
        experience. In the end, I ended up re-developing the website using my own pattern{' '}
        library taking into account all of the things I have learned the first time I{' '}
        have developed it.
      </p>
    </div>
  );
}

export default FopConnectPage;
