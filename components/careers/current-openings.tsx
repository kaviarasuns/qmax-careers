'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

const positions = [
  { 
    id: 1, 
    title: 'Hardware Design Engineer', 
    category: 'Engineering', 
    level: 'Mid-Senior',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Design and develop hardware solutions for cutting-edge embedded systems and IoT devices.',
    responsibilities: [
      'Design schematic diagrams and PCB layouts for custom hardware',
      'Conduct design reviews and ensure compliance with industry standards',
      'Collaborate with firmware and mechanical engineering teams',
      'Perform hardware testing and troubleshooting',
      'Document design specifications and technical documentation'
    ],
    requirements: [
      '5+ years of experience in hardware design',
      'Expertise in circuit design and PCB layout tools (Altium, Eagle, etc.)',
      'Strong knowledge of embedded systems and microcontrollers',
      'Understanding of signal integrity and power distribution',
      'Experience with hardware-firmware co-design'
    ],
    skills: [
      { category: 'Design Tools', items: ['Altium Designer', 'Eagle CAD', 'LTspice', 'Cadence'] },
      { category: 'Technologies', items: ['Embedded Systems', 'Circuit Design', 'PCB Layout', 'Power Electronics'] },
      { category: 'Communication', items: ['Technical Documentation', 'Cross-team Collaboration'] }
    ],
    qualifications: ['B.S. in Electrical Engineering or related field', 'Master\'s degree preferred']
  },
  { 
    id: 2, 
    title: 'Firmware Development Engineer', 
    category: 'Engineering', 
    level: 'Mid-Senior',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Develop robust and efficient firmware for embedded systems and IoT devices.',
    responsibilities: [
      'Write clean, maintainable firmware code in C/C++',
      'Implement device drivers and communication protocols',
      'Optimize code for performance and memory constraints',
      'Conduct unit testing and integration testing',
      'Collaborate with hardware engineers on hardware-software integration'
    ],
    requirements: [
      '4+ years of embedded systems firmware development',
      'Proficiency in C/C++ programming',
      'Experience with real-time operating systems (RTOS)',
      'Knowledge of communication protocols (UART, SPI, I2C, CAN)',
      'Understanding of embedded Linux or similar environments'
    ],
    skills: [
      { category: 'Programming', items: ['C', 'C++', 'Assembly', 'Python'] },
      { category: 'Protocols', items: ['UART', 'SPI', 'I2C', 'CAN', 'Ethernet'] },
      { category: 'Tools', items: ['Git', 'JIRA', 'Debuggers', 'IDEs'] }
    ],
    qualifications: ['B.S. in Computer Engineering, Electrical Engineering, or related field']
  },
  { 
    id: 3, 
    title: 'Embedded Systems Test Engineer', 
    category: 'Engineering', 
    level: 'Entry',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Develop and execute test plans for embedded systems and IoT products.',
    responsibilities: [
      'Create comprehensive test plans and test cases',
      'Execute functional and integration testing',
      'Identify and document defects with detailed reproduction steps',
      'Perform regression testing',
      'Collaborate with development team to resolve issues'
    ],
    requirements: [
      '1-2 years of test engineering experience',
      'Knowledge of embedded systems testing methodologies',
      'Familiarity with test automation tools',
      'Basic understanding of hardware and firmware',
      'Strong attention to detail'
    ],
    skills: [
      { category: 'Testing', items: ['Test Planning', 'Test Automation', 'Manual Testing', 'Debugging'] },
      { category: 'Tools', items: ['JIRA', 'Git', 'CAN Analyzer', 'Logic Analyzers'] },
      { category: 'Languages', items: ['Python', 'C', 'Shell Scripting'] }
    ],
    qualifications: ['B.S. in Computer Science, Engineering, or related field']
  },
  { 
    id: 4, 
    title: 'RF Design Engineer', 
    category: 'Engineering', 
    level: 'Mid-Senior',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Design and optimize RF and wireless communication systems for IoT devices.',
    responsibilities: [
      'Design RF circuits and antenna systems',
      'Perform electromagnetic simulations and analysis',
      'Conduct RF testing and measurements',
      'Optimize wireless performance and range',
      'Ensure regulatory compliance (FCC, CE, etc.)'
    ],
    requirements: [
      '5+ years of RF/wireless design experience',
      'Strong knowledge of RF theory and electromagnetic principles',
      'Experience with RF simulation tools (HFSS, ADS, Sonnet)',
      'Familiarity with antenna design and optimization',
      'Understanding of wireless protocols and standards'
    ],
    skills: [
      { category: 'RF Tools', items: ['HFSS', 'ADS', 'Sonnet', 'CST Microwave Studio'] },
      { category: 'Protocols', items: ['Bluetooth', 'WiFi', 'LoRaWAN', 'Cellular'] },
      { category: 'Measurements', items: ['Network Analyzer', 'Spectrum Analyzer', 'Antenna Measurement'] }
    ],
    qualifications: ['B.S. in Electrical Engineering with RF specialization']
  },
  { 
    id: 5, 
    title: 'Signal Integrity (SI) Engineer', 
    category: 'Engineering', 
    level: 'Mid-Senior',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Ensure signal integrity and power integrity for high-speed designs.',
    responsibilities: [
      'Perform SI/PI simulations and analysis',
      'Design power distribution networks',
      'Optimize high-speed signal routing',
      'Conduct pre- and post-layout analysis',
      'Provide design recommendations to hardware team'
    ],
    requirements: [
      '5+ years of SI/PI analysis experience',
      'Expertise in SI/PI simulation tools',
      'Knowledge of transmission line theory',
      'Experience with high-speed design',
      'Understanding of PCB manufacturing constraints'
    ],
    skills: [
      { category: 'SI/PI Tools', items: ['HyperLynx', 'AltiumSI', 'Keysight ADS', 'ANSYS'] },
      { category: 'Analysis', items: ['EMI/EMC', 'Crosstalk Analysis', 'Impedance Control'] },
      { category: 'Design', items: ['DDR Design', 'High-Speed Interfaces', 'Power Delivery'] }
    ],
    qualifications: ['B.S. in Electrical Engineering']
  },
  { 
    id: 6, 
    title: 'PCB Designer', 
    category: 'Engineering', 
    level: 'Entry-Mid',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Create PCB layouts for embedded systems and IoT devices.',
    responsibilities: [
      'Convert schematic designs to PCB layouts',
      'Route signals while maintaining design rules',
      'Manage component placement and thermal considerations',
      'Generate manufacturing documentation',
      'Support design reviews and manufacturing processes'
    ],
    requirements: [
      '2-4 years of PCB design experience',
      'Proficiency in PCB design tools (Altium, Eagle, KiCAD)',
      'Understanding of design rules and manufacturing constraints',
      'Knowledge of signal integrity basics',
      'Experience with multi-layer PCB designs'
    ],
    skills: [
      { category: 'CAD Tools', items: ['Altium Designer', 'Eagle CAD', 'KiCAD', 'Cadence'] },
      { category: 'Design', items: ['Layout Design', 'Routing', 'Component Placement', 'DFM'] },
      { category: 'Standards', items: ['IPC Standards', 'Design Rules', 'Manufacturing'] }
    ],
    qualifications: ['B.S. in Electrical Engineering or equivalent experience']
  },
  { 
    id: 7, 
    title: 'PCB Librarian', 
    category: 'Engineering', 
    level: 'Entry-Mid',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Maintain and develop PCB component libraries and design assets.',
    responsibilities: [
      'Create and maintain component symbols and footprints',
      'Validate library accuracy and completeness',
      'Organize and manage design asset repositories',
      'Support PCB designers with library queries',
      'Stay updated with component vendor changes'
    ],
    requirements: [
      '2-3 years of PCB library management experience',
      'Proficiency in PCB design software',
      'Attention to detail and organizational skills',
      'Knowledge of component standards and datasheets',
      'Understanding of PCB design requirements'
    ],
    skills: [
      { category: 'CAD Tools', items: ['Altium Designer', 'Eagle CAD', 'KiCAD', 'Symbol Editor'] },
      { category: 'Organization', items: ['Database Management', 'Version Control', 'Documentation'] },
      { category: 'Knowledge', items: ['IPC Standards', 'Component Selection', 'Datasheets'] }
    ],
    qualifications: ['B.S. in Electrical Engineering or related field']
  },
  { 
    id: 8, 
    title: 'Mechanical Design Engineer', 
    category: 'Engineering', 
    level: 'Mid-Senior',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Design mechanical structures and enclosures for embedded products.',
    responsibilities: [
      'Create detailed mechanical designs and 3D models',
      'Perform structural and thermal analysis',
      'Ensure manufacturability and cost-effectiveness',
      'Collaborate with electrical and industrial design teams',
      'Support prototyping and manufacturing processes'
    ],
    requirements: [
      '5+ years of mechanical design experience',
      'Proficiency in CAD software (SolidWorks, CATIA)',
      'Knowledge of FEA and thermal analysis',
      'Understanding of manufacturing processes',
      'Experience with product design from concept to production'
    ],
    skills: [
      { category: 'CAD/CAM', items: ['SolidWorks', 'CATIA', 'AutoCAD', 'Fusion 360'] },
      { category: 'Analysis', items: ['FEA', 'Thermal Analysis', 'Motion Analysis', 'Assembly Design'] },
      { category: 'Manufacturing', items: ['DFM', 'GD&T', 'Prototyping', 'Material Selection'] }
    ],
    qualifications: ['B.S. in Mechanical Engineering']
  },
  { 
    id: 9, 
    title: 'Industrial Designer', 
    category: 'Design', 
    level: 'Mid-Senior',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Create user-centric product designs that balance functionality and aesthetics.',
    responsibilities: [
      'Develop product design concepts and prototypes',
      'Conduct user research and usability testing',
      'Collaborate with engineering teams',
      'Create design specifications and documentation',
      'Ensure adherence to design standards and brand guidelines'
    ],
    requirements: [
      '5+ years of industrial design experience',
      'Strong portfolio demonstrating design process',
      'Proficiency in design tools (Figma, Adobe XD, Sketch)',
      'Understanding of user experience and ergonomics',
      'Knowledge of manufacturing constraints and materials'
    ],
    skills: [
      { category: 'Design Tools', items: ['Figma', 'Adobe XD', 'Sketch', 'Protopie'] },
      { category: 'Skills', items: ['UI/UX Design', 'Prototyping', 'User Research', 'Wireframing'] },
      { category: 'Knowledge', items: ['Design Systems', 'Accessibility', 'User Testing'] }
    ],
    qualifications: ['B.S. in Industrial Design or related field']
  },
  { 
    id: 10, 
    title: 'Full-Stack Web Developer', 
    category: 'Software', 
    level: 'Entry-Mid',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Build web applications and tools for internal and external use.',
    responsibilities: [
      'Develop frontend and backend components',
      'Design and implement APIs and databases',
      'Ensure code quality and security',
      'Collaborate with product and design teams',
      'Deploy and maintain web applications'
    ],
    requirements: [
      '2-3 years of web development experience',
      'Proficiency in modern JavaScript frameworks (React, Vue, Angular)',
      'Backend development experience (Node.js, Python, Java)',
      'Understanding of SQL and databases',
      'Familiarity with cloud platforms (AWS, GCP, Azure)'
    ],
    skills: [
      { category: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
      { category: 'DevOps', items: ['Git', 'Docker', 'AWS', 'CI/CD'] }
    ],
    qualifications: ['B.S. in Computer Science or equivalent experience']
  },
  { 
    id: 11, 
    title: 'Business Development Executive', 
    category: 'Business', 
    level: 'Entry',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Identify and develop business opportunities for strategic partnerships and market expansion.',
    responsibilities: [
      'Research market opportunities and competitive landscape',
      'Identify and approach potential partners and customers',
      'Negotiate contracts and partnership agreements',
      'Support sales and marketing initiatives',
      'Track and report on business development metrics'
    ],
    requirements: [
      '1-3 years of business development or sales experience',
      'Strong communication and negotiation skills',
      'Knowledge of IoT and embedded systems industry (preferred)',
      'Ability to manage multiple projects simultaneously',
      'Self-motivated with strong work ethic'
    ],
    skills: [
      { category: 'Business', items: ['Market Research', 'Negotiation', 'Contract Management', 'CRM Tools'] },
      { category: 'Sales', items: ['Lead Generation', 'Sales Pipeline Management', 'Customer Relations'] },
      { category: 'Tools', items: ['Salesforce', 'Excel', 'PowerPoint', 'LinkedIn'] }
    ],
    qualifications: ['B.A. in Business, Marketing, or related field']
  },
]

function JobCard({ position }: { position: typeof positions[0] }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'md:col-span-2 lg:col-span-3' : ''}`}>
      <div 
        className="p-6 cursor-pointer hover:bg-muted/50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">
              {position.title}
            </h3>
            <p className="mt-2 text-sm text-foreground/60">{position.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge variant="secondary">{position.category}</Badge>
              <Badge variant="outline">{position.level}</Badge>
              <Badge variant="outline">{position.location}</Badge>
            </div>
          </div>
          <ChevronDown 
            className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-border bg-muted/30 px-6 py-6 space-y-6">
          {/* Responsibilities */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Key Responsibilities</h4>
            <ul className="space-y-2">
              {position.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-foreground/80">
                  <span className="text-primary font-semibold">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Requirements</h4>
            <ul className="space-y-2">
              {position.requirements.map((req, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-foreground/80">
                  <span className="text-primary font-semibold">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Required Skills</h4>
            <div className="space-y-4">
              {position.skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <p className="text-sm font-medium text-foreground/70 mb-2">{skillGroup.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, sidx) => (
                      <Badge key={sidx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Qualifications */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Qualifications</h4>
            <ul className="space-y-2">
              {position.qualifications.map((qual, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-foreground/80">
                  <span className="text-primary font-semibold">•</span>
                  <span>{qual}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-border">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </Card>
  )
}

export function CurrentOpenings() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ['Engineering', 'Design', 'Software', 'Business']
  const filteredPositions = selectedCategory 
    ? positions.filter(p => p.category === selectedCategory)
    : positions

  return (
    <section id="openings" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Current Openings</h2>
          <p className="text-lg text-foreground/70">
            Explore our available full-time positions across engineering, design, software, and business teams.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          <Button
            variant={selectedCategory === null ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(null)}
            className={selectedCategory === null ? 'bg-primary text-primary-foreground' : ''}
          >
            All Roles
          </Button>
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'bg-primary text-primary-foreground' : ''}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Positions Grid */}
        <div className="space-y-4">
          {filteredPositions.map(position => (
            <JobCard key={position.id} position={position} />
          ))}
        </div>
      </div>
    </section>
  )
}
