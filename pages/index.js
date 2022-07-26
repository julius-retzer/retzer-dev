import styles from "./index.module.css";
import Badge from "../components/badge";

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <header className={`${styles.section} ${styles.header}`}>
          <div className={styles.faceContainer}>
            <img src="/face2.jpeg" className={styles.face} />
          </div>
          <h1 className={styles.name}>Július Retzer</h1>
          <div className={styles.links}>
            <a
              target="_blank"
              rel="noreferrer noopener nofollow"
              href="https://github.com/wormyy"
            >
              Github
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener nofollow"
              href="https://stackoverflow.com/users/3992613/j%c3%balius-retzer"
            >
              StackOverflow
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener nofollow"
              href="https://www.linkedin.com/in/juliusretzer/"
            >
              LinkedIn
            </a>
            <a target="_blank" href="mailto:julius@retzer.dev">
              Email
            </a>
          </div>
        </header>
        <div className={`${styles.section} ${styles.intro}`}>
          <p>Front-end developer specializing in React apps in Typescript</p>
        </div>
      </div>

      <div>
        <h3>Resume</h3>
        <div className={`${styles.resumeItem}`}>
          <h4>
            Lead Software Engineer <Badge>Contract</Badge>
            <Badge>Remote</Badge>
          </h4>

          <h5>
            <a
              target="_blank"
              rel="noreferrer noopener nofollow"
              href="https://www.epam.com/"
            >
              EPAM Systems
            </a>
          </h5>
          <div className={`${styles.resumeText}`}>
            <ul>
              <li>
                Assumed ownership and responsibility for the application and new
                features​
              </li>
              <li>Responsible for the deployment process to production​​</li>
              <li>
                Initiated the development of automated tests (e2e) and their
                introduction to the development process​​
              </li>
              <li>
                Implemented crucial web app performance metrics and their
                tracking via Firebase to measure the long-term impact of the
                changes on the user experience​​
              </li>
              <li>
                Reduced the total bundle app bundle size by roughly 20% through
                webpack configuration​​
              </li>
              <li>
                Conceived and implemented a more efficient branching and
                releasing strategy​​
              </li>
              <li>Drafted several technical proposal documents​​</li>
              <li>
                Established stricter code quality practices (Typescript, Eslint,
                Prettier)​​
              </li>
              <li>
                Coordinated major version updates of Node.js and Next.js​​
              </li>
            </ul>
            <p>Technology used: </p>
            <ul>
              <li>React</li>
              <li>Typescript</li>
              <li>Next.js</li>
              <li>Cypress</li>
              <li>Jest</li>
            </ul>
            <div className={styles.resumeItemDate}>
              September 2020 - present
            </div>
          </div>
        </div>
        <div className={`${styles.resumeItem}`}>
          <h4>
            Priznanie.digital Lead Developer <Badge>Volunteer</Badge>
            <Badge>Remote</Badge>
          </h4>

          <h5>
            <a
              target="_blank"
              rel="noreferrer noopener nofollow"
              href="http://slovensko.digital"
            >
              Slovensko.Digital
            </a>
          </h5>
          <div className={`${styles.resumeText}`}>
            <p>
              The process of filing the Slovak tax return form is an arduous
              ordeal. In its current shape, the user is facing a 130+ field
              form, described by bureaucratic language and with zero user
              guidance. Many small business owners choose to delegate this task
              to external accountants for a considerable fee.
            </p>
            <p>
              Together with other volunteers and slovensko.digital, we designed
              and developed a simplified wizard-like application called{" "}
              <a
                target="_blank"
                rel="noreferrer noopener nofollow"
                href="http://priznanie.digital"
              >
                priznanie.digital
              </a>
              . It covers the most common use cases with as little effort from
              the user as possible and calculates all necessary tax information
              for users to upload to the government web.
            </p>
            <p>
              The user experience and accessibility was our focus, as we adhered
              to{" "}
              <a
                target="_blank"
                rel="noreferrer noopener nofollow"
                href="https://design-system.service.gov.uk/"
              >
                gov.uk Design System
              </a>
              .
            </p>
            <p>Technology used:</p>
            <ul>
              <li>React</li>
              <li>Typescript</li>
              <li>Next.js</li>
              <li>
                Cypress (extensive automated test suite testing the correctness
                of the calculations in various use cases)
              </li>
              <li>Jest</li>
              <li>Github Actions (CI)</li>
              <li>Vercel/Dokku (deployment)</li>
            </ul>
            <div className={styles.resumeItemDate}>February 2020 - present</div>
          </div>
        </div>
        <div className={`${styles.resumeItem}`}>
          <h4>
            Lab Master / Lecturer <Badge>Contract</Badge>
          </h4>

          <h5>
            <a
              target="_blank"
              rel="noreferrer noopener nofollow"
              href="http://www.openlab.sk"
            >
              OpenLab
            </a>
          </h5>
          <div className={`${styles.resumeText}`}>
            <p>
              OpenLab is a non-profit education project aiming to dramatically
              improve IT education in Slovakia by bridging the gap between high
              schools and the private sector.
            </p>
            <p>My responsibilities include:</p>
            <ul>
              <li>
                Creating a safe and free environment for the students to grow
                professionally and personally
              </li>
              <li>
                Teaching students to independently develop applications using
                web technologies (HTML, CSS, JS, PHP) and frameworks (Vue,
                Ionic, Angular, OctoberCMS)
              </li>
              <li>
                Guiding students through the entire app development lifecycle
                (specification, design, development, testing, deployment) while
                developing solutions to the real-world problems
              </li>
              <li>
                Mentoring and aiding students to develop the necessary soft
                skills (teamwork, communication, feedbacking, self-reflection)
              </li>
              <li>Development of the syllabus and teaching materials</li>
              <li>
                Contributing with ideas to the optimization and viability of the
                OpenLab project
              </li>
            </ul>
            <div className={styles.resumeItemDate}>May 2019 - June 2020</div>
          </div>
        </div>
        <div className={`${styles.resumeItem}`}>
          <h4>
            Web Developer <Badge>Full-time</Badge>
            <Badge>Partially remote</Badge>
          </h4>
          <h5>
            <a
              target="_blank"
              rel="noreferrer noopener nofollow"
              href="http://www.danskebank.dk"
            >
              Danske Bank
            </a>{" "}
            /{" "}
            <a
              target="_blank"
              rel="noreferrer noopener nofollow"
              href="https://danskebank.dk/bolig/sogning"
            >
              Danske Bank Bolig
            </a>
          </h5>
          <div className={`${styles.resumeText}`}>
            <p>
              I was a part of a team developing sunday.dk (now moved to
              danskebank.dk/bolig), a project that helps people to understand
              their finances better when finding and buying a new home.
            </p>
            <p>
              My main focus was on the frontend (React, Redux, Typescript,
              Enzyme, Webpack, Storybook), but I also contributed to the backend
              (Node, Express, Swagger, Mocha, Sequelize).
            </p>
            <p>
              I concentrated on bridging the gap between developers and
              designers, intending to make sure that we share systematic ways to
              guide and leverage our collective efforts. This lead to the
              development of our design system that helps us to stay consistent
              both in the designs and across the implementation.
            </p>
            <p>
              Stack: React, Redux, Node, Express, Typescript, PostgreSQL,
              Elasticsearch, AWS
            </p>
            <div className={styles.resumeItemDate}>
              August 2016 - March 2019 (2 years, 8 months)
            </div>
          </div>
        </div>
        <div className={`${styles.resumeItem}`}>
          <h4>
            Web Developer <Badge>Full-time</Badge>
          </h4>
          <h5>
            <a
              target="_blank"
              rel="noreferrer noopener nofollow"
              href="http://www.quadric.net"
            >
              Quadric
            </a>{" "}
            /{" "}
            <a
              target="_blank"
              rel="noreferrer noopener nofollow"
              href="http://www.feats.co"
            >
              Feats.co
            </a>
          </h5>
          <div className={`${styles.resumeText}`}>
            <p>
              I was part of a small team building a new social network using
              Meteor and React as core technologies. The social network
              eventually became www.feats.co.
            </p>
            <p>Our team:</p>
            <ul>
              <li>adheres to domain-driven development</li>
              <li>
                emphasizes writing accurate specifications in a domain-specific
                language
              </li>
              <li>
                maintains high test coverage on all levels: e2e, integration
                (Cucumber/Chimp.js) and unit tests (Karma, Enzyme)
              </li>
              <li>
                implements continuous integration server as part of the build
                process - always seeks to work with the latest technologies
              </li>
            </ul>
            <p>Stack: React, Meteor, MongoDB, Cucumber, Chimp</p>
            <div className={styles.resumeItemDate}>
              February 2016 - June 2016 (5 months)
            </div>
          </div>
        </div>
        <div className={`${styles.resumeItem}`}>
          <h4>
            Junior Web Developer <Badge>Full-time</Badge>
          </h4>
          <h5>
            <a
              target="_blank"
              rel="noreferrer noopener nofollow"
              href="http://www.edocu.com"
            >
              eDocu
            </a>
          </h5>
          <div className={`${styles.resumeText}`}>
            <p>
              Using stickers with QR codes and NFC chips, eDocu brings you the
              right information on the spot. eDocu is a robust web application
              based on dockerized microservices using technologies like Node.js,
              Clojure and MongoDB on the backend and AngularJS on the frontend.
            </p>
            <p>My responsibilities were:</p>
            <ul>
              <li>development of new features using AngularJS</li>
              <li>design of basic UI/UX</li>
              <li>backend services in Node.js</li>
              <li>migration and utility scripts in Node.js</li>
              <li>learning from the more experienced</li>
            </ul>
            <p>Stack: AngularJS, Node, Express, MongoDB</p>
            <div className={styles.resumeItemDate}>
              Feb 2015 - Feb 2016 (1 year)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
