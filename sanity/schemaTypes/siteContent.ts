import { defineArrayMember, defineField, defineType } from "sanity";

const siteContentInitialValue = {
  home: {
    eyebrow: "Practical. Sustainable. Human-centered.",
    title: "Architecture has evolved into the design of a lifestyle.",
    paragraphs: [
      "We do not only consider building use in design. We also consider carbon footprint, social effects, and impact on users and neighbors. Each design element is evaluated for energy, social, and environmental costs.",
      "We harness natural resources available on site, from the sun, wind, and rain, to the trees and rivers that surround each project.",
    ],
    actions: [
      { label: "Explore Projects", href: "/projects", variant: "primary" },
      { label: "Get in touch", href: "/contact", variant: "outline" },
    ],
    featuredDesign: {
      eyebrow: "Featured Design",
      title: "Clean frontage studies",
      description: "Facade compositions that balance proportion, shade, and a clear architectural identity.",
    },
    tiles: [
      {
        tag: "Site View",
        title: "Aerial Planning",
        description: "Bird's-eye massing and site organization studies.",
      },
      {
        tag: "Interior View",
        title: "Living Space Studies",
        description: "Interior studies focused on light, circulation, and comfort.",
      },
    ],
  },
  about: {
    pageTitle: "Arch. Joseph C. Chua, LRA, PAREB-QCRB",
    sidebarName: "Arch. Joseph C. Chua",
    sidebarSubtitle: "Architect / Realtor\nEnvironmental Planner",
    licenseNumbers: ["Architect PRC #012331", "Plumbing Engr PRC #02197", "REB Lic #007256", "EnP Lic #2957"],
    specializations: ["Green Architecture", "Fire Safety", "Design Consultancy", "Project Management"],
    profileHeading: "Arch. Joseph C. Chua",
    profileParagraphs: ["University of the Philippines, College of Architecture / Batch '94, Cum Laude / Phi Kappa Phi Honor Society"],
    profilePills: ["Architect", "Plumbing Engineer", "Real Estate Broker", "Environmental Planner", "Fire Safety Practitioner", "Pollution Control Officer"],
    keyLicenses: [
      { title: "Registered Architect", meta: "Since 1995" },
      { title: "Master Plumber & Plumbing Engineer", meta: "Since 1996" },
      { title: "Licensed Real Estate Broker", meta: "Since 1997" },
      { title: "Environmental Planner & Fire Safety Practitioner", meta: "" },
    ],
    memberships: [
      { title: "NAMPAP", meta: "National Master Plumbers Assoc. of the Phils." },
      { title: "PAREB", meta: "Phil. Association of Real Estate Boards" },
      { title: "QCRB", meta: "Quezon City Real Estate Board" },
      { title: "Phi Kappa Phi Honor Society", meta: "" },
    ],
    award: {
      text: "Arch. Joseph C. Chua received the award for Aventi Townhomes during the 2013 Philippines Property Awards Night. Aventi Townhomes was also recognized by the South East Asia Property Awards 2013, held in Singapore — honoring excellence in property development across the region.",
    },
    architectureTitle: "Site-specific design for resilience and long-term value",
    principles: [
      "Each project is a unique project. We design each space, wall, window, toilet, stairs, and roof to suit the natural flow of wind, sun and rain in each site. We consider earthquake movements and ease of maintenance of each building. We also consider social interactions of each family member in a residential project.",
      "We always encourage flexibility in designing spaces, as buildings should be able to grow, as the users grow. We believe Architecture can help both the users and the building structure, live a fruitful life thru the values of in depth architectural planning and foresight.",
      "Proper architectural design also helps reduce our maintenance costs for the buildings, as well as help us reduce our environmental costs. A good architecture design is sustainable and resilient over the passage of time.",
    ],
    servicesTitle: "Architectural Consultancy Services",
    services: [
      {
        title: "Architectural Design",
        paragraphs: [
          "We offer schematic design, design development, conceptual design development, and detailing for building projects. We accept designs for residential, commercial, warehouse complex, factories, and resort projects. We provide construction drawings and building permit drawings.",
          "Our designs are climate sensitive, which means we always design using the climate and our environment as one of our tools and design elements. This provides great cost savings for owners over the lifetime of the building.",
        ],
      },
      {
        title: "Design-Build",
        paragraphs: [
          "We offer design-build services for clients who want the same designer to undergo the construction process. We offer lump sum contracts as well as cost-plus contracts. We charge separately for the design component of the design-build services.",
          "We do not do free designs, as all our design work is done meticulously and is client specific, site specific, and budget specific. We design climate sensitive solutions, giving due consideration to local climate, energy consumption, and water consumption for all projects, giving a lifetime of savings for our clients.",
        ],
      },
      {
        title: "Physical Planning and Master Plan Development",
        paragraphs: [
          "We provide large-scale master planning services and physical planning for mid-sized projects. We can provide conceptual design proposals for each project to make it unique and sellable to its target market.",
          "Our master plans are also climate and cost sensitive to benefit the client, users, and the general public.",
        ],
      },
      {
        title: "Green Architecture and Green Plumbing Engineering",
        paragraphs: [
          "We offer green architecture and green plumbing engineering services for specific projects. While we integrate green architecture in all our design projects, clients may also request additional green architecture features.",
          "Most of our green architecture applications use passive design features. We can also design buildings with active green design features when requested, such as solar panels, recirculating rainwater cooling systems, and more.",
        ],
      },
    ],
  },
  projects: {
    showcaseEyebrow: "Design Showcase",
    showcaseTitle: "Architectural concepts and space studies",
    showcaseNote: "A curated carousel space for showcasing architectural design directions.",
    portfolioTitle: "Residential and Commercial Portfolio",
    filterLabels: ["All Projects", "Residential", "Commercial"],
    statusGuideCards: [
      {
        tag: "Concept and Rendered Works",
        title: "Design proposals and visualization studies",
        description:
          "Includes design proposals, planning studies, and rendered presentations developed to evaluate program, spatial direction, and architectural expression prior to construction.",
      },
      {
        tag: "Completed and Built Works",
        title: "Projects realized through construction",
        description:
          "Includes projects that proceeded to site implementation and were completed, representing executed architectural scope.",
      },
    ],
    disclosure:
      "Portfolio note: selected visuals may represent conceptual design studies and rendered direction work, while others document completed built projects.",
    spotlight: {
      title: "Mckinley West Residence",
      type: "Residential",
      description: "A climate-responsive residence balancing privacy, airflow, and long-term maintenance efficiency.",
      points: ["Climate-sensitive planning", "Cost-aware design decisions", "Resilient material strategy"],
    },
    carouselSlides: [
      { tag: "Concept 01", title: "Luxury residential frontage" },
      { tag: "Concept 02", title: "Refined interior spatial flow" },
      { tag: "Concept 03", title: "Commercial form with presence" },
      { tag: "Concept 04", title: "Warm material-led living spaces" },
    ],
  },
  contact: {
    title: "Tell us what you are building",
    formTitle: "Project Inquiry Form",
    formIntro: "Please share your project details so we can prepare an informed architectural consultation.",
    officeHeading: "Office Location",
    officeMapUrl: "https://maps.google.com/maps?q=14.5377,120.9995&z=15&output=embed",
    officeMapLinkUrl: "https://maps.google.com/?q=14.5377,120.9995",
    officeMapLink: "Open full map",
    contactHeading: "Get in touch",
    contactName: "Arch. Joseph C. Chua",
    contactRoles: "Architect ~ Realtor ~ Environmental Planner ~ Plumbing Engineer",
    addressLines: ["265A - Nemar Building, Libertad St. Pasay City, 1300. Philippines."],
    phone: "+63-917-819-4131",
    email: "josephchua.2000@gmail.com",
  },
};

export const siteContentSchema = defineType({
  name: "siteContent",
  title: "Site Content",
  type: "document",
  initialValue: siteContentInitialValue,
  groups: [
    { name: "home", title: "Home Page", default: true },
    { name: "about", title: "About Page" },
    { name: "projects", title: "Projects Page" },
    { name: "contact", title: "Contact Page" },
  ],
  fields: [
    defineField({
      name: "home",
      title: "Home Page",
      type: "object",
      description: "Start here. This controls the homepage hero text, buttons, and featured visuals.",
      group: "home",
      fields: [
        defineField({ name: "eyebrow", title: "Hero Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Hero Title", type: "string" }),
        defineField({
          name: "paragraphs",
          title: "Hero Paragraphs",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "actions",
          title: "Hero Buttons",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "label", title: "Label", type: "string" }),
                defineField({ name: "href", title: "Link", type: "string" }),
                defineField({
                  name: "variant",
                  title: "Variant",
                  type: "string",
                  options: {
                    list: [
                      { title: "Primary", value: "primary" },
                      { title: "Outline", value: "outline" },
                    ],
                  },
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: "featuredDesign",
          title: "Featured Design",
          type: "object",
          fields: [
            defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "string" }),
            defineField({
              name: "image",
              title: "Main Image",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({ name: "alt", title: "Alt Text", type: "string" }),
              ],
            }),
          ],
        }),
        defineField({
          name: "tiles",
          title: "Showcase Tiles",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "tag", title: "Tag", type: "string" }),
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "description", title: "Description", type: "string" }),
                defineField({
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: { hotspot: true },
                  fields: [
                    defineField({ name: "alt", title: "Alt Text", type: "string" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "about",
      title: "About Page",
      type: "object",
      description: "Use this second for the About page profile, awards, principles, and services.",
      group: "about",
      fields: [
        defineField({ name: "pageTitle", title: "Page Title", type: "string" }),
        defineField({
          name: "sidebarImage",
          title: "Sidebar Image",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt Text", type: "string" }),
          ],
        }),
        defineField({ name: "sidebarName", title: "Sidebar Name", type: "string" }),
        defineField({ name: "sidebarSubtitle", title: "Sidebar Subtitle", type: "string" }),
        defineField({
          name: "licenseNumbers",
          title: "License Numbers",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "specializations",
          title: "Specializations",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({ name: "profileHeading", title: "Profile Heading", type: "string" }),
        defineField({
          name: "profileParagraphs",
          title: "Profile Paragraphs",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "profilePills",
          title: "Profile Pills",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "keyLicenses",
          title: "Key Licenses",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "meta", title: "Meta", type: "string" }),
              ],
            }),
          ],
        }),
        defineField({
          name: "memberships",
          title: "Memberships",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "meta", title: "Meta", type: "string" }),
              ],
            }),
          ],
        }),
        defineField({
          name: "award",
          title: "Award Block",
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Award Image",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({ name: "alt", title: "Alt Text", type: "string" }),
              ],
            }),
            defineField({ name: "text", title: "Award Text", type: "string" }),
          ],
        }),
        defineField({ name: "architectureTitle", title: "Architecture Title", type: "string" }),
        defineField({
          name: "principles",
          title: "Design Principles",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({ name: "servicesTitle", title: "Services Title", type: "string" }),
        defineField({
          name: "services",
          title: "Service Blocks",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({
                  name: "paragraphs",
                  title: "Paragraphs",
                  type: "array",
                  of: [defineArrayMember({ type: "string" })],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "projects",
      title: "Projects Page",
      type: "object",
      description: "Use this third for the projects showcase, filters, spotlight, and carousel.",
      group: "projects",
      fields: [
        defineField({ name: "showcaseEyebrow", title: "Showcase Eyebrow", type: "string" }),
        defineField({ name: "showcaseTitle", title: "Showcase Title", type: "string" }),
        defineField({ name: "showcaseNote", title: "Showcase Note", type: "string" }),
        defineField({
          name: "carouselSlides",
          title: "Carousel Slides",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "tag", title: "Tag", type: "string" }),
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: { hotspot: true },
                  fields: [
                    defineField({ name: "alt", title: "Alt Text", type: "string" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        defineField({ name: "portfolioTitle", title: "Portfolio Title", type: "string" }),
        defineField({
          name: "filterLabels",
          title: "Filter Labels",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "statusGuideCards",
          title: "Status Guide Cards",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "tag", title: "Tag", type: "string" }),
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "description", title: "Description", type: "string" }),
              ],
            }),
          ],
        }),
        defineField({ name: "disclosure", title: "Portfolio Disclosure", type: "string" }),
        defineField({
          name: "spotlight",
          title: "Featured Project Spotlight",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "type", title: "Type", type: "string" }),
            defineField({ name: "description", title: "Description", type: "string" }),
            defineField({
              name: "points",
              title: "Points",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
            defineField({
              name: "image",
              title: "Spotlight Image",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({ name: "alt", title: "Alt Text", type: "string" }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "contact",
      title: "Contact Page",
      type: "object",
      description: "Use this last for the contact page title, form text, map, and contact details.",
      group: "contact",
      fields: [
        defineField({ name: "title", title: "Page Title", type: "string" }),
        defineField({ name: "formTitle", title: "Form Title", type: "string" }),
        defineField({ name: "formIntro", title: "Form Intro", type: "string" }),
        defineField({ name: "officeHeading", title: "Office Heading", type: "string" }),
        defineField({ name: "officeMapUrl", title: "Office Map URL", type: "string" }),
        defineField({ name: "officeMapLinkUrl", title: "Office Map Link URL", type: "string" }),
        defineField({ name: "officeMapLink", title: "Office Map Link Text", type: "string" }),
        defineField({ name: "contactHeading", title: "Contact Heading", type: "string" }),
        defineField({ name: "contactName", title: "Contact Name", type: "string" }),
        defineField({ name: "contactRoles", title: "Contact Roles", type: "string" }),
        defineField({
          name: "addressLines",
          title: "Address Lines",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({ name: "phone", title: "Phone", type: "string" }),
        defineField({ name: "email", title: "Email", type: "string" }),
      ],
    }),
  ],
});
