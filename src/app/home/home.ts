import { Component, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnDestroy {
  protected readonly activeTechnologyIndex = signal(0);
  protected readonly activePartnerIndex = signal(0);
  protected readonly activeTestimonialIndex = signal(0);
  private technologyTimer: ReturnType<typeof setInterval> | undefined;
  private partnerTimer: ReturnType<typeof setInterval> | undefined;
  private testimonialTimer: ReturnType<typeof setInterval> | undefined;

  constructor() {
    this.startTechnologyCarousel();
    this.startPartnerCarousel();
    this.startTestimonialCarousel();
  }

  protected readonly services = [
    {
      title: 'HR and Payroll Systems',
      description:
        'HRMIS platforms, payroll automation, attendance monitoring, leave management, payslip generation, government reports, and biometric integrations.',
    },
    {
      title: 'Custom Business Software',
      description:
        'Inventory systems, accounting integrations, ERP modules, CRM tools, workflow automation, and internal team portals.',
    },
    {
      title: 'Web and API Development',
      description:
        'REST APIs, third-party integrations, backend services, admin dashboards, authentication flows, and reporting engines.',
    },
    {
      title: 'Cloud and Deployment',
      description:
        'Docker deployment, VPS setup, AWS hosting, secure server configuration, release preparation, and production support.',
    },
  ];

  protected readonly portfolioHighlights = [
    {
      title: 'Business-rule accuracy',
      description:
        'Experience building HR, payroll, reporting, and attendance modules where calculations, approvals, and permissions need to be exact.',
    },
    {
      title: 'Maintainable architecture',
      description:
        'Backend, frontend, data, and deployment decisions are organized around clean APIs, clear modules, and future changes.',
    },
    {
      title: 'Production mindset',
      description:
        'Systems are built with testing, deployment, server setup, security, and handoff in mind from the beginning.',
    },
  ];

  protected readonly technologies = [
    { name: 'Laravel', category: 'Backend systems', logo: 'logos/laravel.png' },
    { name: '.NET', category: 'Enterprise APIs', logo: 'logos/dotnet.png' },
    { name: 'Angular', category: 'Frontend apps', logo: 'logos/angular.png' },
    { name: 'React', category: 'Interactive UI', logo: 'logos/react.png' },
    { name: 'MySQL', category: 'Relational data', logo: 'logos/mysql.png' },
    { name: 'Docker', category: 'Container deploys', logo: 'logos/docker.png' },
    { name: 'AWS / VPS', category: 'Cloud hosting', logo: 'logos/aws.png' },
    { name: 'REST APIs', category: 'Integrations', logo: 'logos/api.png' },
    { name: 'Codex', category: 'AI coding agent', logo: 'logos/codex.svg' },
    { name: 'ChatGPT', category: 'AI-assisted planning', logo: 'logos/chatgpt.png' },
    { name: 'Copilot', category: 'AI pair programming', logo: 'logos/copilot.png' },
  ];

  protected readonly certifications = [
    {
      title: 'Certified Junior Angular Developer',
      issuer: 'Certificates.dev',
      issued: 'March 13, 2025',
      credentialId: '9e6c0071-0b95-4bba-98b5-14b7e2407cda',
      description:
        'Validated Angular fundamentals including components, services, dependency injection, routing, reactive forms, RxJS, change detection, and TypeScript patterns.',
      logo: 'logos/angular.png',
      url: 'https://certificates.dev/c/9e6c0071-0b95-4bba-98b5-14b7e2407cda',
    },
  ];

  protected readonly portfolio = [
    {
      type: 'Portfolio Project',
      name: 'HRMIS Platform',
      description: 'Employee records, departments, leave workflows, attendance summaries, reports, and employee self-service access.',
    },
    {
      type: 'Portfolio Project',
      name: 'Payroll Management System',
      description: 'Payroll computation, deductions, allowances, payslip generation, approval flows, and export-ready payroll reports.',
    },
    {
      type: 'Portfolio Project',
      name: 'Attendance Monitoring',
      description: 'Biometric attendance integrations, daily time records, late and undertime rules, and attendance dashboards.',
    },
    {
      type: 'Portfolio Project',
      name: 'Enterprise Reporting',
      description: 'PDF exports, government remittance reports, payroll summaries, audit-ready records, and management dashboards.',
    },
  ];

  protected readonly partners = [
    { name: 'Akiva Holdings Corp.', industry: 'Marketing and Distribution' },
    { name: 'River Valley Distribution Inc.', industry: 'Distribution and Logistics' },
    { name: 'Mixed-Load Distribution Network, Inc.', industry: 'Distribution and Logistics' },
    { name: 'Integra Management and Development Corporation', industry: 'Operations and Management' },
    { name: 'Bertahan Distribution Corporation', industry: 'Distribution Operations' },
    { name: 'Jupiter Distribution Inc.', industry: 'Distribution Operations' },
  ];

  protected readonly testimonials = [
    {
      quote: 'HRMIS work centered on employee records, attendance, leave workflows, roles, and management visibility.',
      name: 'HRMIS Development',
      role: 'Employee management systems',
    },
    {
      quote: 'Payroll modules designed for accurate computation, payslip generation, deductions, and export-ready reporting.',
      name: 'Payroll Engineering',
      role: 'Computation and reporting',
    },
    {
      quote: 'Production releases supported through Docker, VPS, AWS, secure configuration, and release maintenance.',
      name: 'Deployment Support',
      role: 'Deployment and support',
    },
  ];

  protected readonly processSteps = [
    {
      title: 'Discovery',
      description: 'Understand requirements, business rules, workflow challenges, users, permissions, and current system limitations.',
    },
    {
      title: 'System Design',
      description: 'Plan modules, database structure, roles, reports, integrations, and secure software architecture.',
    },
    {
      title: 'Development',
      description: 'Build the application with modern frameworks, clean APIs, responsive interfaces, and iterative previews.',
    },
    {
      title: 'Testing and Deployment',
      description: 'Validate computations, permissions, reports, and integrations before deploying to VPS, AWS, or your chosen server.',
    },
    {
      title: 'Support and Maintenance',
      description: 'Provide updates, fixes, enhancements, and guidance as your team starts using the system in production.',
    },
  ];

  protected readonly faqs = [
    {
      question: 'Can you build a custom HRMIS or payroll system?',
      answer:
        'Yes. I can tailor the system around employee records, payroll rules, attendance policies, approval flows, and reporting needs.',
    },
    {
      question: 'Do you support biometric attendance integrations?',
      answer:
        'Yes. Attendance data can be connected from compatible biometric devices or existing attendance exports into HR and payroll workflows.',
    },
    {
      question: 'Can you deploy the system to our server?',
      answer:
        'Yes. Deployment support can include Docker, VPS setup, AWS hosting, secure server configuration, and production release preparation.',
    },
  ];

  protected readonly contactMethods = [
    { label: 'Email', value: 'jason.tana.3@gmail.com', href: 'mailto:jason.tana.3@gmail.com', icon: 'mail' },
    { label: 'Availability', value: 'Open to project discussions', href: 'mailto:jason.tana.3@gmail.com', icon: 'phone' },
    { label: 'Location', value: 'Philippines and remote work', href: '#contact', icon: 'location' },
  ];

  protected setActiveTechnology(index: number): void {
    this.activeTechnologyIndex.set(index);
    this.startTechnologyCarousel();
  }

  protected setActivePartner(index: number): void {
    this.activePartnerIndex.set(index);
    this.startPartnerCarousel();
  }

  protected setActiveTestimonial(index: number): void {
    this.activeTestimonialIndex.set(index);
    this.startTestimonialCarousel();
  }

  protected pausePartnerCarousel(): void {
    if (this.partnerTimer) {
      clearInterval(this.partnerTimer);
      this.partnerTimer = undefined;
    }
  }

  protected pauseTechnologyCarousel(): void {
    if (this.technologyTimer) {
      clearInterval(this.technologyTimer);
      this.technologyTimer = undefined;
    }
  }

  protected pauseTestimonialCarousel(): void {
    if (this.testimonialTimer) {
      clearInterval(this.testimonialTimer);
      this.testimonialTimer = undefined;
    }
  }

  protected startTechnologyCarousel(): void {
    this.pauseTechnologyCarousel();
    this.technologyTimer = setInterval(() => {
      this.activeTechnologyIndex.update((index) => (index + 1) % this.technologies.length);
    }, 5000);
  }

  protected startPartnerCarousel(): void {
    this.pausePartnerCarousel();
    this.partnerTimer = setInterval(() => {
      this.activePartnerIndex.update((index) => (index + 1) % this.partners.length);
    }, 5000);
  }

  protected startTestimonialCarousel(): void {
    this.pauseTestimonialCarousel();
    this.testimonialTimer = setInterval(() => {
      this.activeTestimonialIndex.update((index) => (index + 1) % this.testimonials.length);
    }, 5000);
  }

  ngOnDestroy(): void {
    this.pauseTechnologyCarousel();
    this.pausePartnerCarousel();
    this.pauseTestimonialCarousel();
  }
}
