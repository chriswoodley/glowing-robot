'use client';

import React from 'react';
import {
  Image,
  AspectRatioContainer,
} from '@cw/design-system';

function MyBpStationPage() {
  return (
    <div>
      <AspectRatioContainer
          size="xlg"
          ratio="2/1"
        >
        <Image
          src="../projects/mybpstation-com.jpg"
          alt="My BP Station"
          width="1263"
          height="929"
          fill
        />
      </AspectRatioContainer>

      <p>
        BP (British Petroleum) Driver Rewards website exist to help United States customers{' '}
        keep track of their driver reward discounts earned at the pump. Find the nearest gas{' '}
        stations by zip code. Take advantage of seasonal promotions and learn more about BP{' '}
        Fuels. The primary goals of this website are:
      </p>

      <ul>
        <li>
          Drive new BP Driver Reward member sign-ups
        </li>
        <li>
          Promote BP Fuels
        </li>
      </ul>

      <h2>
        Full Stack Developer Role
      </h2>

      <p>
        While employed at{' '}
        <a href="http://gyro.com/" target="_blank" rel="noopener noreferrer">Gyro</a>, I had the{' '}
        privilege of working with BP and other 3rd party vendors to make this project a success.{' '}
        My role as a Full Stack Developer is outlined below:
      </p>

      <ul>
        <li>
          Back-end and front-end development of the public and member only sections of{' '}
          mybpstation.com for both mobile and desktop experiences{' '}
          (not including the Station Finder). Leveraged the CakePHP MVC framework, HTML5, CSS3,{' '}
          and jQuery to build the site.
        </li>
        <li>
          Back-end development of the Driver Rewards registration process, account management,{' '}
          member driving profile, password management, driver reward status, and historical{' '}
          transactions using a 3rd party Loyalty Rewards API.
        </li>
        <li>
          Back-end and front-end development of the Give a Reward promotion application.{' '}
          The application allowed current Driver Reward members and BP VISA cardholders to build{' '}
          an email with a live preview containing a custom message to “Gift” 25¢ off per gallon{' '}
          up to three of their friends or family members.
        </li>
        <li>
          Back-end and front-end integration of the VISA Offers Platform. This integration{' '}
          allowed Driver Rewards members to link up to 5 BP VISA cards with their Driver Reward{' '}
          account, unlink current VISA cards, or completely un-enroll from the program.
        </li>
        <li>
          Back-end development of the BP Station Finder management tool that allowed BP{' '}
          representatives to import or update BP Gas Station locations.
        </li>
        <li>
          Worked with 3rd party vendors to implement conversion-tracking scripts.
        </li>
        <li>
          Include 301 redirects to redirect traffic of the old site to the new site upon launch.
        </li>
      </ul>

      <h3>
        Challenges
      </h3>

      <ul>
        <li>
          The site itself was hosted on 8 servers with a load balancer and a global traffic{' '}
          manager. The main challenge I had was deploying code to production and staging{' '}
          environments. Debugging code proved to be difficult and any code change I have made{' '}
          required the code to be redeployed and tested. To circumvent the repetition of{' '}
          uploading code to each server, the team setup automatic deployments each time code {' '}
          was committed to an SVN repository.
        </li>
        <li>
          Learning the 3rd party Loyalty Rewards API and the VISA Offers Platform API proved{' '}
          to be a challenge. Both parties provided Functional Design Documents and were{' '}
          available for questions or issues as they arose during the development process.
        </li>
        <li>
          One of the requirements of the Give a Reward application development was to send data{' '}
          to a 3rd party vendor for end-to-end testing. I used a PHP library called Faker and{' '}
          wrote a CakePHP Shell script that would seed over a hundred records of data that{' '}
          were sent over for testing.
        </li>
      </ul>

      <h3>
        What I Have Learned
      </h3>

      <ul>
        <li>
          I understood the importance of a Functional Design Document and written use cases.{' '}
          They were detrimental in the success of this project and would never recommend{' '}
          starting a large-scale project without them.
        </li>
        <li>
          I learned what different roles the load balancer, global traffic manager, firewall,{' '}
          VPN tunnels played in server security, disaster recovery, and load balancing.
        </li>
        <li>
          I rediscovered how powerful the CakePHP framework is and the importance of why an{' '}
          MVC framework was important for this project. It kept the code organized and made it{' '}
          easy to working simultaneously with my fellow colleagues.
        </li>
        <li>
          I learned how to leverage node, npm, and gulp.js to concatenate and minify all{' '}
          front-end code.
        </li>
        <li>
          I discovered a tool called BrowserSync that helped me author my CSS and JavaScript{' '}
          code while seeing the changes live in multiple web browsers at once.
        </li>
      </ul>
    </div>
  );
}

export default MyBpStationPage;
