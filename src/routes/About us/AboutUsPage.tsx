import React from "react";

const AboutUsPage: React.FC = () => (
  <div style={{ padding: "2rem", maxWidth: 800, margin: "0 auto", color: "#fff" }}>
    <h1>About Us</h1>

    <section style={{ marginBottom: "2rem" }}>
      <h2>🏛️ Founding and Early Growth (1765–1865)</h2>
      <ul>
        <li><strong>1765:</strong> Founded as Taylors & Lloyds in Birmingham by Sampson Lloyd and John Taylor.</li>
        <li><strong>1822:</strong> Introduced the beehive emblem after a highway robbery, symbolizing thrift and industry.</li>
        <li><strong>1865:</strong> Converted into a joint-stock company, enabling rapid expansion.</li>
      </ul>
    </section>

    <section style={{ marginBottom: "2rem" }}>
      <h2>🐎 Expansion and Symbolism (1866–1945)</h2>
      <ul>
        <li><strong>1884:</strong> Acquired Barnetts, Hoares & Co., inheriting the iconic black horse symbol.</li>
        <li><strong>1912:</strong> Moved headquarters to Lombard Street, London.</li>
        <li><strong>1914–1918:</strong> Employed thousands of women during WWI; over 6,000 staff served in the war.</li>
        <li><strong>1928:</strong> Introduced mechanized accounting, revolutionizing banking operations.</li>
        <li><strong>1941:</strong> Staff funded a Spitfire named “The Black Horse” for WWII efforts.</li>
      </ul>
    </section>

    <section style={{ marginBottom: "2rem" }}>
      <h2>💳 Technological Innovation (1946–1995)</h2>
      <ul>
        <li><strong>1959:</strong> Among the first UK banks to install a computer for customer data.</li>
        <li><strong>1972:</strong> Launched the first Cashpoint™ ATM in the UK.</li>
        <li><strong>1985:</strong> Introduced the UK’s first home banking system.</li>
        <li><strong>1988:</strong> Enabled cashless shopping with Visa cards.</li>
      </ul>
    </section>

    <section style={{ marginBottom: "2rem" }}>
      <h2>🔗 Mergers and Digital Leap (1995–2009)</h2>
      <ul>
        <li><strong>1995:</strong> Merged with TSB, forming Lloyds TSB.</li>
        <li><strong>1998:</strong> Launched Lloyds On-Line, the first major UK bank internet service.</li>
        <li><strong>2000:</strong> Acquired Scottish Widows, expanding into life assurance and investments.</li>
        <li><strong>2009:</strong> Took over HBOS plc, forming Lloyds Banking Group, the UK’s largest retail bank.</li>
      </ul>
    </section>

    <section style={{ marginBottom: "2rem" }}>
      <h2>🌐 Modern Era and Resilience (2010–Present)</h2>
      <ul>
        <li><strong>2013:</strong> Re-established TSB as a separate bank following EU regulations.</li>
        <li><strong>2024:</strong> Reported £906 billion in assets and £4.5 billion in net income, with over 63,000 employees.</li>
        <li>Continues to lead in digital banking, sustainability, and financial inclusion.</li>
      </ul>
    </section>
  </div>
);

export default AboutUsPage;