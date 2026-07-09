import type { Project } from "@/features/portfolio/types";

const placeholderRepositoryUrl = "https://github.com/";
const tinyMimoRepositoryUrl = "https://github.com/imranhasanshuvo50-bd/tiny-mimo/tree/main";

export const featuredProjects = [
  {
    slug: "smart-home-automation",
    title: "Smart Home Automation System",
    description:
      "An IoT-based automation concept for controlling household devices, monitoring environment signals, and improving everyday energy efficiency.",
    image: {
      src: "/images/projects/smart-home-automation.svg",
      alt: "Smart home automation dashboard illustration"
    },
    techStack: ["IoT", "Embedded C", "Sensors", "Automation"],
    status: "Prototype",
    githubUrl: placeholderRepositoryUrl,
    detailsUrl: "#projects"
  },
  {
    slug: "tiny-mimo",
    title: "Tiny Mimo Robot",
    description:
      "A personal fun desktop companion robot with ESP32-C3, BLE app control, OLED expressions, battery monitoring, and prayer reminders.",
    image: {
      src: "/images/projects/tiny-mimo/thumbnail.jpeg",
      alt: "Tiny Mimo Robot showing time and prayer reminder on an OLED display"
    },
    techStack: ["ESP32-C3", "BLE", "SH1106 OLED", "Battery ADC", "Mobile App"],
    status: "Personal Build",
    githubUrl: tinyMimoRepositoryUrl,
    detailsUrl: "#tiny-mimo",
    spotlight: {
      eyebrow: "Personal Fun Project",
      title: "Tiny Mimo Robot",
      summary:
        "Tiny Mimo is a compact low-power desktop companion built for fun and hands-on embedded practice. It feels alive through OLED eye animations, button interaction and buzzer feedback, while still handling useful tasks like clock sync, battery status, charging status and prayer reminders through a BLE mobile app.",
      repositoryLabel: "Open GitHub Repository",
      documentationLabel: "Details summarized from the project documentation",
      stats: [
        {
          label: "Controller",
          value: "ESP32-C3 Mini"
        },
        {
          label: "Display",
          value: "SH1106 OLED 128x64"
        },
        {
          label: "Connectivity",
          value: "Bluetooth Low Energy"
        },
        {
          label: "Power",
          value: "18650 Li-ion + TP4056"
        }
      ],
      featureGroups: [
        {
          title: "Robot Behavior",
          items: [
            "OLED eye animations with idle, blink, happy, surprise and pet states",
            "Button interaction for pet animation, long-press shutdown and wake confirmation",
            "Buzzer feedback for startup, reminders, interaction and power-off"
          ]
        },
        {
          title: "BLE App Control",
          items: [
            "Scan and connect to the TinyMimoRobot BLE device",
            "Sync phone time or send a custom robot clock",
            "Update Fajr, Dhuhr, Asr, Maghrib and Isha reminder schedules"
          ]
        },
        {
          title: "Embedded Hardware",
          items: [
            "ESP32-C3 Mini controller with SH1106 OLED over I2C",
            "GPIO button, active buzzer and charger detect input",
            "Battery voltage measurement through an ADC voltage divider"
          ]
        },
        {
          title: "Power Management",
          items: [
            "Idle, low-power, very-low-power and deep-sleep operating modes",
            "OLED, BLE and buzzer shutdown before deep sleep",
            "Button wake-up flow designed to avoid accidental power-on"
          ]
        }
      ],
      protocol: [
        {
          command: "TIME",
          purpose: "Set full date-time or only the current time"
        },
        {
          command: "PRAYER",
          purpose: "Save five daily prayer reminder times"
        },
        {
          command: "STATUS",
          purpose: "Return time, battery, charging and prayer values"
        },
        {
          command: "PET",
          purpose: "Trigger cute interaction animation and sound"
        },
        {
          command: "CHG",
          purpose: "Set charging mode manually or return to automatic detection"
        }
      ],
      gallery: [
        {
          src: "/images/projects/tiny-mimo/prototype-assembly.jpeg",
          alt: "Tiny Mimo prototype assembly with OLED and wiring",
          caption: "Prototype assembly",
          orientation: "portrait"
        },
        {
          src: "/images/projects/tiny-mimo/oled-module.jpeg",
          alt: "Tiny Mimo OLED module during hardware assembly",
          caption: "OLED module wiring",
          orientation: "landscape"
        },
        {
          src: "/images/projects/tiny-mimo/esp32-board.png",
          alt: "ESP32-C3 Mini board mounted on prototype PCB",
          caption: "ESP32-C3 control board",
          orientation: "portrait"
        },
        {
          src: "/images/projects/tiny-mimo/internal-assembly.png",
          alt: "Tiny Mimo internal assembly with ESP32 board and OLED wiring",
          caption: "Internal layout",
          orientation: "portrait"
        },
        {
          src: "/images/projects/tiny-mimo/app-connect.jpeg",
          alt: "Tiny Mimo BLE app device connection screen",
          caption: "BLE connect screen",
          orientation: "portrait"
        },
        {
          src: "/images/projects/tiny-mimo/app-dashboard.jpeg",
          alt: "Tiny Mimo app dashboard with time telemetry and robot control panel",
          caption: "App dashboard",
          orientation: "portrait"
        },
        {
          src: "/images/projects/tiny-mimo/app-prayer-schedules.jpeg",
          alt: "Tiny Mimo app prayer schedule configuration screen",
          caption: "Prayer schedule sync",
          orientation: "portrait"
        },
        {
          src: "/images/projects/tiny-mimo/app-manual-sync.jpeg",
          alt: "Tiny Mimo app manual time sync screen",
          caption: "Manual time sync",
          orientation: "portrait"
        },
        {
          src: "/images/projects/tiny-mimo/app-date-picker.jpeg",
          alt: "Tiny Mimo app custom date picker modal",
          caption: "Custom date picker",
          orientation: "portrait"
        },
        {
          src: "/images/projects/tiny-mimo/app-time-picker.jpeg",
          alt: "Tiny Mimo app custom time picker modal",
          caption: "Custom time picker",
          orientation: "portrait"
        }
      ]
    }
  },
  {
    slug: "sonar-positioning-system",
    title: "Sonar Positioning System",
    description:
      "A positioning prototype using ultrasonic sensing to estimate object distance and support spatial awareness in embedded systems.",
    image: {
      src: "/images/projects/sonar-positioning.svg",
      alt: "Sonar positioning system illustration"
    },
    techStack: ["Ultrasonic Sensor", "Embedded Systems", "Signal Processing"],
    status: "Research",
    githubUrl: placeholderRepositoryUrl,
    detailsUrl: "#projects"
  },
  {
    slug: "trading-business-management-system",
    title: "Trading Business Management System",
    description:
      "A management platform concept for organizing stock, transactions, customer records, and daily operational workflows for a trading business.",
    image: {
      src: "/images/projects/trading-business-management.svg",
      alt: "Trading business management dashboard illustration"
    },
    techStack: ["Software Engineering", "Database", "Dashboard", "Reporting"],
    status: "Completed",
    githubUrl: placeholderRepositoryUrl,
    detailsUrl: "#projects"
  },
  {
    slug: "digital-rpm-meter",
    title: "Digital RPM Meter",
    description:
      "A measurement tool for calculating rotational speed from sensor input and presenting stable readings for engineering diagnostics.",
    image: {
      src: "/images/projects/digital-rpm-meter.svg",
      alt: "Digital RPM meter interface illustration"
    },
    techStack: ["Microcontroller", "IR Sensor", "Measurement", "Display"],
    status: "Prototype",
    githubUrl: placeholderRepositoryUrl,
    detailsUrl: "#projects"
  },
  {
    slug: "2s-battery-management-system",
    title: "2S Battery Management System",
    description:
      "A battery safety project for monitoring a two-cell pack, balancing voltage behavior, and supporting safer low-voltage operation.",
    image: {
      src: "/images/projects/2s-battery-management.svg",
      alt: "2S battery management system illustration"
    },
    techStack: ["Battery Safety", "BMS", "Electronics", "Monitoring"],
    status: "In Progress",
    githubUrl: placeholderRepositoryUrl,
    detailsUrl: "#projects"
  }
] satisfies Project[];
