import { Link } from 'react-router-dom';

// ─── Shared Layout ────────────────────────────────────────────────────────────
function LegalLayout({ title, lastUpdated, children }) {
  return (
    <div style={{ background: 'var(--white)', minHeight: '100vh' }}>
      {/* Hero header */}
      <div style={{ background: 'var(--navy)', padding: '64px 24px 52px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Link to="/" style={{
            fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, fontWeight: 500,
            color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em',
            display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 24,
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
          >
            ← Back to Home
          </Link>
          <h1 style={{
            fontFamily: 'Barlow, sans-serif', fontWeight: 900,
            fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--white)',
            lineHeight: 1.1, marginBottom: 12,
          }}>{title}</h1>
          {lastUpdated && (
            <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
              Last Updated: {lastUpdated}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '56px 24px 96px' }}>
        {children}
      </div>

      <style>{`
        .legal-content p {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 16px;
          line-height: 1.8;
          color: #333;
          margin-bottom: 16px;
        }
        .legal-content h2 {
          font-family: 'Barlow', sans-serif;
          font-weight: 800;
          font-size: 22px;
          color: var(--navy);
          margin-top: 44px;
          margin-bottom: 12px;
        }
        .legal-content ul {
          padding-left: 24px;
          margin-bottom: 16px;
        }
        .legal-content li {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 16px;
          line-height: 1.8;
          color: #333;
          margin-bottom: 4px;
        }
        .legal-content strong {
          font-weight: 600;
          color: var(--navy);
        }
        .legal-contact {
          margin-top: 44px;
          background: var(--platinum);
          border-left: 3px solid var(--teal);
          border-radius: 5px;
          padding: 24px 28px;
        }
        .legal-contact p {
          margin-bottom: 6px !important;
        }
        .legal-contact a {
          color: var(--teal);
          text-decoration: underline;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}

// ─── Terms and Conditions ─────────────────────────────────────────────────────
export function TermsAndConditions() {
  return (
    <LegalLayout title="Terms and Conditions" lastUpdated="March 2025">
      <div className="legal-content">
        <p>Welcome to FORCE Scholar, operated by <strong>Foundation of Research in Careers &amp; Education LLC</strong> ("Company", "we", "our", or "us").</p>
        <p>These Terms and Conditions govern your use of our website, services, and programs, including mentorship and career exploration programs for students.</p>
        <p>By registering for our programs or using our website, you agree to these Terms.</p>

        <h2>1. Eligibility</h2>
        <p>Our programs are designed for students aged <strong>12–18 years</strong>.</p>
        <p>If a student is under the age of 18, registration must be completed by a <strong>parent or legal guardian</strong>, who agrees to these Terms on behalf of the student.</p>

        <h2>2. Program Description</h2>
        <p>FORCE Scholar offers online career exploration and mentorship programs that may include:</p>
        <ul>
          <li>Live online sessions</li>
          <li>Interactive discussions</li>
          <li>Group projects</li>
          <li>Mentorship activities</li>
          <li>Career exploration exercises</li>
          <li>Community interactions</li>
        </ul>
        <p>Sessions are conducted via online platforms such as <strong>Zoom</strong>.</p>

        <h2>3. Community Participation</h2>
        <p>Students may interact with other participants through:</p>
        <ul>
          <li>live sessions</li>
          <li>group projects</li>
          <li>moderated community spaces such as <strong>WhatsApp groups</strong></li>
        </ul>
        <p>Participants must engage respectfully and follow all community guidelines.</p>
        <p>The Company reserves the right to remove any participant who engages in inappropriate or disruptive behavior.</p>

        <h2>4. Payment</h2>
        <p>All program fees must be paid in full before participation.</p>
        <p>Payments are processed through third-party payment providers such as <strong>Razorpay</strong>.</p>
        <p>We are not responsible for payment gateway errors or delays.</p>

        <h2>5. Refund Policy</h2>
        <p>All program fees are <strong>non-refundable</strong>.</p>
        <p>Due to limited seats and program planning requirements, <strong>no refunds will be issued after payment</strong>, including in cases of non-attendance.</p>

        <h2>6. Intellectual Property</h2>
        <p>All course materials, curriculum, recordings, and program content are the intellectual property of <strong>Foundation of Research in Careers &amp; Education LLC</strong>.</p>
        <p>Participants may not reproduce, distribute, or share program materials without written permission.</p>

        <h2>7. Student Work and Media</h2>
        <p>Students may voluntarily create projects or presentations during the program.</p>
        <p>By participating, the parent/guardian grants the Company permission to:</p>
        <ul>
          <li>showcase student projects</li>
          <li>share testimonials</li>
          <li>display program outcomes</li>
        </ul>
        <p>These may be used for educational or promotional purposes.</p>
        <p>Personal information will not be disclosed without consent.</p>

        <h2>8. Recording of Sessions</h2>
        <p>Some sessions may be recorded for educational, quality, or internal review purposes.</p>
        <p>Recordings will not be publicly shared without appropriate permissions.</p>

        <h2>9. Limitation of Liability</h2>
        <p>Participation in the program is voluntary.</p>
        <p>The Company does not guarantee specific educational, career, or academic outcomes.</p>
        <p>To the fullest extent permitted by law, the Company shall not be liable for indirect or consequential damages arising from participation.</p>

        <h2>10. Termination of Access</h2>
        <p>We reserve the right to suspend or terminate participation if a student:</p>
        <ul>
          <li>violates community standards</li>
          <li>engages in harassment or harmful behavior</li>
          <li>disrupts program activities</li>
        </ul>
        <p>No refunds will be issued in such cases.</p>

        <h2>11. Changes to Terms</h2>
        <p>We may update these Terms periodically.</p>
        <p>Continued participation constitutes acceptance of the updated Terms.</p>

        <h2>12. Contact</h2>
        <div className="legal-contact">
          <p>For any questions regarding these Terms, contact:</p>
          <p><strong>Foundation of Research in Careers &amp; Education LLC</strong></p>
          <p><a href="mailto:support@forcescholar.com">support@forcescholar.com</a></p>
        </div>
      </div>
    </LegalLayout>
  );
}

// ─── Privacy Policy ───────────────────────────────────────────────────────────
export function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="March 2025">
      <div className="legal-content">
        <p>Foundation of Research in Careers &amp; Education LLC ("we", "our", or "us") values the privacy of students and parents participating in FORCE Scholar programs.</p>

        <h2>Information We Collect</h2>
        <p>During registration we may collect:</p>
        <ul>
          <li>Student name</li>
          <li>Parent/guardian name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Student age</li>
          <li>School information</li>
          <li>Interests and academic background</li>
        </ul>

        <h2>How We Use Information</h2>
        <p>We use this information to:</p>
        <ul>
          <li>register students for programs</li>
          <li>communicate program updates</li>
          <li>coordinate sessions</li>
          <li>manage community groups</li>
          <li>improve our educational programs</li>
        </ul>

        <h2>Communication</h2>
        <p>Participants may receive updates via:</p>
        <ul>
          <li>email</li>
          <li>WhatsApp</li>
          <li>program announcements</li>
        </ul>
        <p>These communications relate only to program participation and updates.</p>

        <h2>Data Protection</h2>
        <p>We implement reasonable administrative and technical measures to protect personal information.</p>
        <p>However, no online system can guarantee absolute security.</p>

        <h2>Children's Information</h2>
        <p>Our programs involve students aged 12–18.</p>
        <p>Registration must be completed by a <strong>parent or legal guardian</strong>, who consents to the collection and use of information necessary for program participation.</p>

        <h2>Third-Party Services</h2>
        <p>We may use third-party tools including:</p>
        <ul>
          <li>Zoom (live sessions)</li>
          <li>Razorpay (payment processing)</li>
          <li>messaging platforms such as WhatsApp</li>
        </ul>
        <p>These platforms operate under their own privacy policies.</p>

        <h2>Media and Student Work</h2>
        <p>With parental consent, we may showcase student projects, presentations, or testimonials for educational and promotional purposes.</p>

        <h2>Updates to Privacy Policy</h2>
        <p>We may update this Privacy Policy periodically.</p>

        <h2>Contact</h2>
        <div className="legal-contact">
          <p>Questions regarding privacy may be directed to:</p>
          <p><a href="mailto:support@forcescholar.com">support@forcescholar.com</a></p>
        </div>
      </div>
    </LegalLayout>
  );
}

// ─── Refund and Cancellation Policy ──────────────────────────────────────────
export function RefundPolicy() {
  return (
    <LegalLayout title="Refund and Cancellation Policy" lastUpdated="March 2026">
      <div className="legal-content">
        <p>All FORCE Scholar programs are <strong>non-refundable</strong>.</p>
        <p>Due to limited program capacity, instructor scheduling, and preparation of learning materials, <strong>all payments are final once a student is enrolled</strong>.</p>

        <h2>Refunds Will Not Be Issued For</h2>
        <ul>
          <li>missed sessions</li>
          <li>scheduling conflicts</li>
          <li>withdrawal from the program</li>
          <li>removal due to policy violations</li>
        </ul>

        <h2>Company-Initiated Cancellations</h2>
        <p>If a program must be cancelled by the Company due to unforeseen circumstances, participants may be offered:</p>
        <ul>
          <li>a rescheduled cohort, or</li>
          <li>an alternative program opportunity.</li>
        </ul>

        <h2>Contact</h2>
        <div className="legal-contact">
          <p>For questions, contact:</p>
          <p><a href="mailto:support@forcescholar.com">support@forcescholar.com</a></p>
        </div>
      </div>
    </LegalLayout>
  );
}

// ─── Parent Program Participation Agreement ───────────────────────────────────
export function ParticipationAgreement() {
  return (
    <LegalLayout title="Parent Program Participation Agreement" lastUpdated="March 2026">
      <div className="legal-content">
        <p><strong>Organization:</strong> Foundation of Research in Careers &amp; Education LLC</p>
        <p><strong>Program:</strong> FORCE Scholar Mentorship and Career Exploration Program</p>
        <p style={{ marginTop: 20 }}>This Parent Program Participation Agreement ("Agreement") governs participation in the FORCE Scholar program.</p>
        <p>By registering a student for the program, the parent or legal guardian agrees to the terms outlined below.</p>

        <h2>1. Parent or Guardian Authorization</h2>
        <p>The parent or legal guardian confirms that they are legally authorized to enroll the student in the program.</p>
        <p>The parent agrees to this Agreement on behalf of the student.</p>

        <h2>2. Program Description</h2>
        <p>FORCE Scholar is an online mentorship and career exploration program designed for students aged 12–18.</p>
        <p>The program may include:</p>
        <ul>
          <li>live online sessions</li>
          <li>career exploration activities</li>
          <li>collaborative projects</li>
          <li>group discussions</li>
          <li>presentations</li>
          <li>mentorship interactions</li>
        </ul>
        <p>Sessions are conducted via online platforms such as Zoom.</p>

        <h2>3. Online Participation</h2>
        <p>Students may interact with other participants during program activities including:</p>
        <ul>
          <li>live sessions</li>
          <li>project teams</li>
          <li>moderated community spaces such as WhatsApp groups</li>
        </ul>
        <p>Participants are expected to engage respectfully and follow community guidelines.</p>

        <h2>4. Code of Conduct</h2>
        <p>Students must maintain respectful and appropriate behavior.</p>
        <p>The following conduct is prohibited:</p>
        <ul>
          <li>harassment or bullying</li>
          <li>discriminatory or offensive language</li>
          <li>disruptive behavior</li>
          <li>sharing inappropriate content</li>
        </ul>
        <p>The Company reserves the right to remove participants who violate community standards.</p>

        <h2>5. Parental Responsibility</h2>
        <p>Parents acknowledge that online programs involve peer interaction and collaborative activities.</p>
        <p>Parents agree to support responsible participation and encourage appropriate behavior by the student.</p>

        <h2>6. Recording of Sessions</h2>
        <p>Some sessions may be recorded for educational, training, or quality assurance purposes.</p>
        <p>Recordings may be used internally or for program review.</p>

        <h2>7. Media and Student Work Consent</h2>
        <p>Students may create projects, presentations, or research outputs during the program.</p>
        <p>The parent or guardian grants permission for Foundation of Research in Careers &amp; Education LLC to showcase student work or program outcomes for educational or promotional purposes.</p>
        <p>Reasonable efforts will be made to avoid sharing sensitive personal information.</p>

        <h2>8. Intellectual Property</h2>
        <p>All program materials, curriculum, and instructional content are owned by Foundation of Research in Careers &amp; Education LLC.</p>
        <p>Participants may not reproduce or distribute program materials without permission.</p>

        <h2>9. Program Fees and Refunds</h2>
        <p>Program fees must be paid prior to participation.</p>
        <p>All payments are <strong>non-refundable</strong> once enrollment is confirmed.</p>
        <p>Refunds will not be issued for:</p>
        <ul>
          <li>missed sessions</li>
          <li>voluntary withdrawal</li>
          <li>scheduling conflicts</li>
          <li>removal due to policy violations</li>
        </ul>

        <h2>10. Limitation of Liability</h2>
        <p>The program is intended for educational and mentorship purposes.</p>
        <p>The Company does not guarantee specific educational, admission, or career outcomes.</p>
        <p>To the fullest extent permitted by law, Foundation of Research in Careers &amp; Education LLC shall not be liable for indirect, incidental, or consequential damages arising from participation in the program.</p>

        <h2>11. Safety and Conduct Enforcement</h2>
        <p>To maintain a safe learning environment, the Company reserves the right to:</p>
        <ul>
          <li>monitor community spaces</li>
          <li>enforce conduct guidelines</li>
          <li>remove participants if necessary</li>
        </ul>
        <p>No refund will be issued if removal occurs due to policy violations.</p>

        <h2>12. Privacy</h2>
        <p>Student and parent information will be handled in accordance with the FORCE Scholar Privacy Policy.</p>

        <h2>13. Updates to Agreement</h2>
        <p>The Company may update this Agreement periodically.</p>
        <p>Continued participation in the program constitutes acceptance of the updated terms.</p>

        <h2>14. Contact Information</h2>
        <div className="legal-contact">
          <p>For questions or concerns regarding this Agreement, contact:</p>
          <p><strong>Foundation of Research in Careers &amp; Education LLC</strong></p>
          <p><a href="mailto:support@forcescholar.com">support@forcescholar.com</a></p>
        </div>
      </div>
    </LegalLayout>
  );
}

// ─── Student Conduct and Community Policy ─────────────────────────────────────
export function StudentConductPolicy() {
  return (
    <LegalLayout title="Student Conduct and Community Policy" lastUpdated="March 2026">
      <div className="legal-content">
        <p>FORCE Scholar programs rely on collaborative and respectful participation.</p>
        <p>Students are expected to follow these community guidelines.</p>

        <h2>Respectful Interaction</h2>
        <p>Students must treat peers, mentors, and instructors with respect.</p>
        <p>Harassment, discrimination, bullying, or disruptive behavior is prohibited.</p>

        <h2>Appropriate Use of Platforms</h2>
        <p>Program platforms such as Zoom and WhatsApp should be used only for program-related communication.</p>
        <p>Students must not share:</p>
        <ul>
          <li>offensive content</li>
          <li>inappropriate messages</li>
          <li>spam or promotional material</li>
        </ul>

        <h2>Academic Integrity</h2>
        <p>Students should complete work honestly and respect intellectual property.</p>

        <h2>Removal from Program</h2>
        <p>Participants who violate these guidelines may be removed from the program without refund.</p>

        <h2>Contact</h2>
        <div className="legal-contact">
          <p>For questions or concerns, contact:</p>
          <p><a href="mailto:support@forcescholar.com">support@forcescholar.com</a></p>
        </div>
      </div>
    </LegalLayout>
  );
}

// ─── Child Safety and Minor Protection Policy ─────────────────────────────────
export function ChildSafetyPolicy() {
  return (
    <LegalLayout title="Child Safety and Minor Protection Policy" lastUpdated="March 2026">
      <div className="legal-content">
        <p>Foundation of Research in Careers &amp; Education LLC is committed to maintaining a safe environment for all student participants.</p>

        <h2>Parental Consent</h2>
        <p>All students under 18 must be registered by a <strong>parent or legal guardian</strong>.</p>
        <p>Parents consent to their child participating in live sessions, discussions, and collaborative learning activities.</p>

        <h2>Moderated Environment</h2>
        <p>Program sessions are conducted in moderated online environments.</p>
        <p>Facilitators oversee discussions and activities to ensure respectful interaction.</p>

        <h2>Code of Conduct</h2>
        <p>Students must:</p>
        <ul>
          <li>treat others respectfully</li>
          <li>avoid harassment, bullying, or offensive language</li>
          <li>maintain appropriate online behavior</li>
        </ul>
        <p>Violations may result in removal from the program.</p>

        <h2>Communication Guidelines</h2>
        <p>Students should communicate only within approved program platforms.</p>
        <p>Private or unsupervised communication between participants outside program spaces is discouraged.</p>

        <h2>Reporting Concerns</h2>
        <p>Parents or students who observe inappropriate behavior should immediately report concerns to:</p>
        <div className="legal-contact" style={{ marginTop: 16 }}>
          <p><a href="mailto:support@forcescholar.com">support@forcescholar.com</a></p>
          <p>We will investigate and take appropriate action.</p>
        </div>

        <h2>Removal for Safety</h2>
        <p>The Company reserves the right to remove participants who violate safety guidelines.</p>
      </div>
    </LegalLayout>
  );
}
