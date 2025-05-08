import React from 'react';

function AboutUs() {
  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Who We Are</h2>
      <p className="mb-4">
        At MCEO, we are passionate digital marketers, designers, and developers who collaborate to build powerful brand identities and marketing strategies that drive growth.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p>
            Our mission is to empower businesses through innovative and data-driven digital marketing strategies that maximize ROI and boost online presence.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p>
            We envision a future where every brand has the digital tools and strategy to connect, engage, and thrive in a competitive online landscape.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Our Values</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Integrity and Transparency</li>
          <li>Innovation and Excellence</li>
          <li>Client Success and Satisfaction</li>
          <li>Teamwork and Collaboration</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutUs;