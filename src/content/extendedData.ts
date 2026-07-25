export const testimonialsData = [
  {
    quote: "GPower Solutions provided a masterclass in industrial decarbonization. Their holistic approach helped us reduce our site emissions by over 80% without disrupting our critical 24/7 manufacturing operations.",
    author: "Rajesh Kumar",
    role: "VP of Sustainability",
    company: "Tata Steel",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  },
  {
    quote: "The feasibility study and subsequent deployment of the Green Hydrogen pilot were executed flawlessly. They don't just sell technology; they engineer commercial resilience.",
    author: "Priya Desai",
    role: "Chief Operating Officer",
    company: "Reliance Industries",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704c"
  },
  {
    quote: "Navigating open-access regulations and integrating 4MW of captive solar with storage seemed impossible. GPower handled everything from grid approvals to final commissioning seamlessly.",
    author: "Amit Patel",
    role: "Head of Energy Infrastructure",
    company: "Adani Green",
    image: "https://i.pravatar.cc/150?u=a04258a2462d826712d"
  }
];

export const faqData = [
  {
    question: "Do you offer financing options like CAPEX or OPEX (PPA) models?",
    answer: "Yes, we are highly flexible. Depending on your financial strategy, we offer outright purchase (CAPEX), deferred payment structures, and zero-upfront Power Purchase Agreements (OPEX) where you only pay for the energy consumed at a discounted tariff."
  },
  {
    question: "How long does a typical industrial green transition project take?",
    answer: "Our initial feasibility study and energy audit typically takes 3-4 weeks. Once a solution is selected and engineered, implementation timelines vary by scale: rooftop solar usually takes 3-6 months, while complex BESS or Hydrogen integration can take 9-15 months."
  },
  {
    question: "What geographic regions do you currently cover?",
    answer: "While we are headquartered in India with extensive coverage across South Asia, our engineering and advisory services support industrial clients across the Middle East, Southeast Asia, and select European markets."
  },
  {
    question: "Does GPower Solutions handle regulatory approvals for grid connectivity?",
    answer: "Absolutely. Regulatory compliance, net-metering approvals, and open-access grid connectivity are core components of our end-to-end service offering. We manage the entire bureaucratic process."
  }
];

export const blogPosts = [
  {
    slug: "future-of-industrial-green-hydrogen",
    title: "The Future of Industrial Green Hydrogen",
    excerpt: "Why heavy industries are shifting from grey to green hydrogen for process feedstock and energy security.",
    date: "July 12, 2026",
    category: "Insights",
    author: "Arjun Mehta",
    content: `
The European Union's Carbon Border Adjustment Mechanism (CBAM) represents a seismic shift in global trade. By placing a carbon price on certain imported goods, the EU is effectively forcing international suppliers to decarbonize or face severe competitive disadvantages.

The Immediate Impact
Initially targeting sectors like iron, steel, cement, aluminum, fertilizers, and electricity, CBAM requires importers to purchase certificates corresponding to the carbon price they would have paid had the goods been produced under the EU's carbon pricing rules.

For Indian and Asian exporters, this means the carbon footprint of your manufacturing process is now a direct line item on your export invoice.

Turning Compliance into a Competitive Advantage
Many manufacturers view CBAM purely as a compliance burden. At GPower Solutions, we advise our clients to view it as a strategic moat.

1. Auditable Baselines: The first step is rigorous carbon accounting. You cannot reduce what you do not measure.
2. Aggressive Renewables: By rapidly integrating open-access renewable energy and captive solar, exporters can drastically lower their embedded emissions.
3. Process Electrification: Replacing fossil-fuel-driven boilers with industrial heat pumps and electrified processes further slashes Scope 1 emissions.

Exporters who decarbonize now will not only avoid CBAM penalties but will actively win market share from slower-moving competitors who become priced out of the European market.
    `
  },
  {
    slug: "bess-optimizing-renewable-roi",
    title: "BESS: Optimizing Renewable ROI",
    excerpt: "How Battery Energy Storage Systems are unlocking the true commercial potential of captive solar.",
    date: "June 28, 2026",
    category: "Technology",
    author: "Meera Reddy",
    content: `
As industrial facilities scale their captive solar installations, they quickly encounter the "duck curve" reality: solar generation peaks at noon, but industrial load profiles often demand constant, 24/7 power. This mismatch results in curtailed energy or heavy reliance on the grid during peak tariff hours. 

Enter Battery Energy Storage Systems (BESS).

Beyond Simple Storage
BESS is fundamentally transforming how industrial plants manage energy. It is not merely a backup generator; it is a dynamic energy asset.

Peak Shaving
Industrial tariffs often include high peak-demand charges. By discharging stored solar energy during these peak windows, facilities can drastically flatten their load curve, leading to immediate and substantial reductions in monthly utility bills.

Grid Resilience and Power Quality
For sensitive manufacturing processes, even a momentary voltage sag can ruin an entire production batch. Modern lithium-ion and flow batteries respond in milliseconds, ensuring seamless power quality and protecting critical infrastructure from grid instability.

Maximizing Solar Utilization
Without storage, a facility might be forced to export excess midday solar to the grid at low feed-in tariffs. BESS allows plants to capture 100% of their generated electrons and shift them to evening shifts, maximizing the ROI of the solar asset itself.

Our deployments have shown that pairing a 5MW solar plant with a 2MWh storage system can reduce overall grid dependency by an additional 30% compared to solar alone.
    `
  },
  {
    slug: "navigating-cbam-for-indian-exporters",
    title: "Navigating CBAM for Exporters",
    excerpt: "What the EU's Carbon Border Adjustment Mechanism means for Asian manufacturing supply chains.",
    date: "June 05, 2026",
    category: "Policy",
    author: "Vikram Singh",
    content: `
The European Union's Carbon Border Adjustment Mechanism (CBAM) represents a seismic shift in global trade. By placing a carbon price on certain imported goods, the EU is effectively forcing international suppliers to decarbonize or face severe competitive disadvantages.

The Immediate Impact
Initially targeting sectors like iron, steel, cement, aluminum, fertilizers, and electricity, CBAM requires importers to purchase certificates corresponding to the carbon price they would have paid had the goods been produced under the EU's carbon pricing rules.

For Indian and Asian exporters, this means the carbon footprint of your manufacturing process is now a direct line item on your export invoice.

Turning Compliance into a Competitive Advantage
Many manufacturers view CBAM purely as a compliance burden. At GPower Solutions, we advise our clients to view it as a strategic moat.

1. Auditable Baselines: The first step is rigorous carbon accounting. You cannot reduce what you do not measure.
2. Aggressive Renewables: By rapidly integrating open-access renewable energy and captive solar, exporters can drastically lower their embedded emissions.
3. Process Electrification: Replacing fossil-fuel-driven boilers with industrial heat pumps and electrified processes further slashes Scope 1 emissions.

Exporters who decarbonize now will not only avoid CBAM penalties but will actively win market share from slower-moving competitors who become priced out of the European market.
    `
  }
];

export const industriesData: Record<string, {
  title: string;
  description: string;
  challenges: string[];
  solutions: string[];
  image: string;
}> = {
  'manufacturing': {
    title: 'Manufacturing',
    description: 'Empowering heavy and discrete manufacturing with stable, low-cost green energy to offset volatile grid tariffs and meet stringent sustainability targets.',
    challenges: ['High peak-demand charges', 'Stringent Scope 2 emission goals', 'Power quality sensitivity'],
    solutions: ['Captive Solar + BESS', 'Energy Efficiency Audits', 'Open Access Renewables'],
    image: '/industries.png'
  },
  'chemicals-refining': {
    title: 'Chemicals & Refining',
    description: 'Decarbonizing highly energy-intensive chemical processes and transitioning critical feedstocks away from fossil fuels.',
    challenges: ['Reliance on grey hydrogen', 'Intense process heat requirements', 'Strict safety and compliance standards'],
    solutions: ['Green Hydrogen Electrolysis', 'Industrial Heat Electrification', 'Utility-Scale Solar PPAs'],
    image: '/industries.png'
  },
  'steel-metals': {
    title: 'Steel & Metals',
    description: 'Leading the transition to green steel through alternative reduction technologies and massive-scale renewable integration.',
    challenges: ['Massive carbon footprints', 'CBAM export penalties', 'High thermal energy demand'],
    solutions: ['Hydrogen DRI transition planning', 'Furnace electrification', 'Gigawatt-scale renewable procurement'],
    image: '/industries.png'
  },
  'cement-materials': {
    title: 'Cement & Materials',
    description: 'Tackling one of the hardest-to-abate sectors through alternative fuels, waste heat recovery, and clean power.',
    challenges: ['Process emissions from clinker', 'High continuous thermal demand', 'Logistical emission footprints'],
    solutions: ['Waste Heat Recovery Systems (WHRS)', 'Alternative fuel integration', 'Solar deployment at mining sites'],
    image: '/industries.png'
  },
  'food-beverage': {
    title: 'Food & Beverage',
    description: 'Ensuring absolute power reliability for cold chains while achieving net-zero targets demanded by global consumers.',
    challenges: ['24/7 refrigeration loads', 'Consumer pressure for green products', 'Waste management'],
    solutions: ['Rooftop Solar', 'Biogas from organic waste', 'Battery storage for cold-chain resilience'],
    image: '/industries.png'
  },
  'textiles': {
    title: 'Textiles',
    description: 'Greening the textile supply chain to comply with global brand mandates and reduce operational OPEX.',
    challenges: ['High water and thermal energy use', 'Margin pressures', 'Fast-fashion sustainability mandates'],
    solutions: ['Solar thermal for process heat', 'Rooftop photovoltaics', 'Energy efficiency retrofits'],
    image: '/industries.png'
  },
  'pharmaceuticals': {
    title: 'Pharmaceuticals',
    description: 'Delivering uninterruptible, clean power to critical R&D and manufacturing facilities.',
    challenges: ['Zero tolerance for power interruptions', 'Strict environmental controls (HVAC)', 'Corporate ESG goals'],
    solutions: ['Fuel Cell Backup Power', 'BESS for power quality', 'Renewable Energy Certificates (RECs)'],
    image: '/industries.png'
  },
  'data-centers': {
    title: 'Data Centers',
    description: 'Powering the AI and cloud revolution with 24/7 carbon-free energy solutions.',
    challenges: ['Massive, constant power draw', 'Cooling energy intensity', 'Need for 99.999% uptime'],
    solutions: ['24/7 Carbon-Free Energy (CFE) matching', 'Fuel Cell primary power', 'Advanced BESS integration'],
    image: '/industries.png'
  },
  'logistics-ports': {
    title: 'Logistics & Ports',
    description: 'Electrifying port operations and establishing green corridors for global trade.',
    challenges: ['Diesel reliance in heavy machinery', 'Large geographic footprints', 'Scope 3 emissions for clients'],
    solutions: ['EV fleet charging infrastructure', 'Port microgrids', 'On-site solar generation'],
    image: '/industries.png'
  }
};
