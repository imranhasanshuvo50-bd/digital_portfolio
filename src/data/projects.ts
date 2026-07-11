import type { Project } from "@/features/portfolio/types";

const smartHomeRepositoryUrl = "https://github.com/imranhasanshuvo50-bd/ScalableHomeAutomaton-project";
const tinyMimoRepositoryUrl = "https://github.com/imranhasanshuvo50-bd/tiny-mimo/tree/main";
const tinyMimoVideoUrl = "https://youtu.be/CjP3RhEBCQk";
const tinyMimoVideoEmbedUrl =
  "https://www.youtube.com/embed/CjP3RhEBCQk?autoplay=1&mute=1&controls=0&loop=1&playlist=CjP3RhEBCQk&playsinline=1&rel=0&modestbranding=1";
const rpmMeterRepositoryUrl = "https://github.com/imranhasanshuvo50-bd/rpm_meter.git";
const rpmMeterVideoUrl = "https://www.youtube.com/shorts/sEjCWp1BOqA";
const rpmMeterVideoEmbedUrl =
  "https://www.youtube.com/embed/sEjCWp1BOqA?autoplay=1&mute=1&controls=0&loop=1&playlist=sEjCWp1BOqA&playsinline=1&rel=0&modestbranding=1";
const sonarPositioningRepositoryUrl =
  "https://github.com/imranhasanshuvo50-bd/sonar_positioning_System";
const tradingManagementRepositoryUrl =
  "https://github.com/imranhasanshuvo50-bd/c-/tree/main/MsMalek%20Traders";

export const featuredProjects = [
  {
    slug: "smart-home-automation",
    title: "Smart Home Automation System",
    description:
      "A scalable local-first smart home system using a Flutter app, ESP32 parent hub, ESP32 child nodes, HTTP APIs, ESP-NOW and BLE provisioning.",
    image: {
      src: "/images/projects/smart-home-automation/hero-smart-home-system.jpg",
      alt: "Modern smart home automation concept with connected devices and mobile control"
    },
    techStack: ["Flutter", "ESP32", "ESP-NOW", "BLE", "HTTP API"],
    status: "Prototype",
    githubUrl: smartHomeRepositoryUrl,
    detailsUrl: "#smart-home-automation",
    spotlight: {
      eyebrow: "Scalable IoT System",
      title: "Scalable Smart Home Automation System",
      summary:
        "A local-first smart home automation platform built around a Flutter mobile application, one ESP32 parent room hub and distributed ESP32 child nodes. The parent hub exposes a local HTTP JSON API to the app, manages Wi-Fi hotspot/router connectivity, controls local light and fan outputs, and coordinates registered child nodes. Child nodes report sensor status over ESP-NOW, measure LDR and battery voltage, and control a curtain servo in manual or automatic mode. BLE provisioning is used for role setup, Wi-Fi configuration and device reset, so the system can operate without a cloud server.",
      repositoryLabel: "Open GitHub Repository",
      documentationLabel: "View Project Documentation",
      documentationUrl: "/documents/projects/smart-home-automation-documentation.md",
      stats: [
        {
          label: "Mobile App",
          value: "Flutter"
        },
        {
          label: "Controllers",
          value: "ESP32 parent hub + child nodes"
        },
        {
          label: "Device Link",
          value: "ESP-NOW"
        },
        {
          label: "Provisioning",
          value: "BLE + Wi-Fi hotspot"
        }
      ],
      featureGroups: [
        {
          title: "System Architecture",
          items: [
            "Parent-child architecture with one ESP32 room hub coordinating multiple distributed child nodes",
            "Local-first operation through parent hotspot mode or home-router mode without a cloud dependency",
            "Persistent device roles, Wi-Fi credentials and child registry stored in ESP32 Preferences"
          ]
        },
        {
          title: "Flutter Application",
          items: [
            "Dynamic dashboard for room hub devices, child node status, light control, fan control and curtain control",
            "Wi-Fi scan, save and reconnect flow for configuring the parent hub on the local network",
            "Pairing workflow for approving child node requests, removing nodes and resetting device configuration"
          ]
        },
        {
          title: "Embedded Firmware",
          items: [
            "Parent hub exposes HTTP JSON APIs to the app and forwards child commands over ESP-NOW",
            "Child node reads LDR and battery voltage, controls an SG90 curtain servo and reports status to the parent",
            "BLE configuration supports role selection, device naming, Wi-Fi credentials, parent MAC setup and factory reset"
          ]
        },
        {
          title: "Automation Logic",
          items: [
            "Curtain automation uses LDR voltage thresholding to detect bright and dark conditions",
            "Stable-delay logic prevents rapid servo movement from shadows, temporary light changes or sensor noise",
            "Manual override suspends automatic LDR control until auto mode is enabled again"
          ]
        }
      ],
      protocolTitle: "APIs & Commands",
      protocol: [
        {
          command: "GET /api/devices",
          purpose: "Return the parent and child manifest used to build the app dashboard"
        },
        {
          command: "POST /api/device/control",
          purpose: "Control parent light/fan outputs or send curtain servo commands to a child node"
        },
        {
          command: "POST /api/device/auto",
          purpose: "Enable or disable automatic curtain control for a child node"
        },
        {
          command: "GET /api/wifi/scan",
          purpose: "Scan nearby Wi-Fi networks from the ESP32 parent hub"
        },
        {
          command: "WIFI_TRY / SAVE",
          purpose: "BLE provisioning commands for testing and saving router Wi-Fi credentials"
        },
        {
          command: "FORGET_CHILD / RESETCFG",
          purpose: "Remove registered nodes or return a device to an unconfigured state"
        }
      ],
      galleryTitle: "App, Hub & Node Photos",
      gallery: [
        {
          src: "/images/projects/smart-home-automation/app-room-hub-dashboard.jpeg",
          alt: "Flutter dashboard showing room hub light and fan controls",
          caption: "Room hub dashboard",
          orientation: "portrait",
          fit: "contain"
        },
        {
          src: "/images/projects/smart-home-automation/app-curtain-dashboard-dark.jpeg",
          alt: "Flutter dashboard showing curtain node status, photo sensor voltage, battery voltage and servo controls",
          caption: "Curtain node dashboard",
          orientation: "portrait",
          fit: "contain"
        },
        {
          src: "/images/projects/smart-home-automation/app-wifi-status.jpeg",
          alt: "Flutter Wi-Fi status screen showing hub hotspot, hotspot IP and home Wi-Fi connection",
          caption: "Wi-Fi status",
          orientation: "portrait",
          fit: "contain"
        },
        {
          src: "/images/projects/smart-home-automation/app-wifi-scan.jpeg",
          alt: "Flutter Wi-Fi screen listing available secured Wi-Fi networks and password input",
          caption: "Wi-Fi scan and connect",
          orientation: "portrait",
          fit: "contain"
        },
        {
          src: "/images/projects/smart-home-automation/app-pair-screen.jpeg",
          alt: "Flutter pair screen with pending curtain node request and approval controls",
          caption: "Pair approval flow",
          orientation: "portrait",
          fit: "contain"
        },
        {
          src: "/images/projects/smart-home-automation/app-node-pair-request.jpeg",
          alt: "Flutter node screen showing detected hub hotspot, pair token and hub API address",
          caption: "Node pairing request",
          orientation: "portrait",
          fit: "contain"
        },
        {
          src: "/images/projects/smart-home-automation/app-node-config.jpeg",
          alt: "Flutter node configuration screen showing device ID, device name and scan hubs action",
          caption: "Node configuration",
          orientation: "portrait",
          fit: "contain"
        },
        {
          src: "/images/projects/smart-home-automation/app-node-hub-detected.jpeg",
          alt: "Flutter node setup screen showing detected smart home hub hotspot",
          caption: "Detected hub hotspot",
          orientation: "portrait",
          fit: "contain"
        },
        {
          src: "/images/projects/smart-home-automation/main-hub-top-view.jpeg",
          alt: "ESP32 parent room hub prototype top view with relay and power circuitry",
          caption: "Parent hub top view",
          orientation: "portrait",
          fit: "contain"
        },
        {
          src: "/images/projects/smart-home-automation/main-hub-power-section.jpeg",
          alt: "Parent hub power and relay section on perfboard",
          caption: "Parent hub power section",
          orientation: "portrait",
          fit: "contain"
        },
        {
          src: "/images/projects/smart-home-automation/node-circuit-diagram.jpeg",
          alt: "ESP32 curtain node circuit diagram with solar panel, buck converter, TP4056 charger, battery, LDR and servo",
          caption: "Curtain node circuit diagram",
          orientation: "landscape",
          fit: "contain"
        },
        {
          src: "/images/projects/smart-home-automation/node-power-section.jpeg",
          alt: "Curtain node implementation with ESP32, battery holder, charging module and servo motor",
          caption: "Curtain node power section",
          orientation: "portrait",
          fit: "contain"
        },
        {
          src: "/images/projects/smart-home-automation/node-back-view.jpeg",
          alt: "Curtain node back view with ESP32 board, battery holder and servo connection",
          caption: "Curtain node back view",
          orientation: "portrait",
          fit: "contain"
        },
        {
          src: "/images/projects/smart-home-automation/node-solar-servo-top.jpeg",
          alt: "Solar panel and servo motor used with the curtain node prototype",
          caption: "Solar panel and servo",
          orientation: "portrait",
          fit: "contain"
        }
      ]
    }
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
    videoPreview: {
      embedUrl: tinyMimoVideoEmbedUrl,
      title: "Tiny Mimo Robot project video"
    },
    spotlight: {
      eyebrow: "Personal Fun Project",
      title: "Tiny Mimo Robot",
      summary:
        "Tiny Mimo is a compact low-power desktop companion built for fun and hands-on embedded practice. It feels alive through OLED eye animations, button interaction and buzzer feedback, while still handling useful tasks like clock sync, battery status, charging status and prayer reminders through a BLE mobile app.",
      repositoryLabel: "Open GitHub Repository",
      documentationLabel: "Project Details",
      videoLabel: "Watch Project Video",
      videoUrl: tinyMimoVideoUrl,
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
      "An ESP32 master-slave indoor positioning prototype using ultrasonic time-of-flight, ESP-NOW synchronization and Flutter visualization.",
    image: {
      src: "/images/projects/sonar-positioning-system/flutter-location-view.png",
      alt: "Flutter app location view plotting the computed sonar position",
      fit: "contain"
    },
    techStack: ["ESP32", "HC-SR04", "ESP-NOW", "Flutter", "ToF"],
    status: "Course Project",
    githubUrl: sonarPositioningRepositoryUrl,
    detailsUrl: "#sonar-positioning-system",
    spotlight: {
      eyebrow: "Indoor Positioning Project",
      title: "Sonar Positioning System",
      summary:
        "An ultrasonic sonar-based indoor positioning system built with an ESP32 target device and ground-station anchor setup. The target/slave device is the object whose location is detected. After receiving an ESP-NOW trigger, it transmits an ultrasonic pulse, while the ground station receives the pulse through anchor sensors placed at known positions. Distance is estimated from ultrasonic time-of-flight, and the Flutter app plots the target location from the anchor-point perspective.",
      repositoryLabel: "Open GitHub Repository",
      documentationLabel: "View Project Report",
      documentationUrl: "/documents/projects/sonar-positioning-system-report.pdf",
      stats: [
        {
          label: "Architecture",
          value: "ESP32 master-slave"
        },
        {
          label: "Sensors",
          value: "3 x HC-SR04"
        },
        {
          label: "Method",
          value: "Ultrasonic ToF + circle intersection"
        },
        {
          label: "Overall Error",
          value: "0.63%"
        }
      ],
      featureGroups: [
        {
          title: "Measurement System",
          items: [
            "Uses ultrasonic time-of-flight to estimate distances from the target device to two ground-station anchor receiver points",
            "Known anchor positions define the coordinate perspective used for plotting the target device location",
            "Short-range indoor setup designed for low-cost embedded positioning experiments"
          ]
        },
        {
          title: "Wireless Synchronization",
          items: [
            "ESP-NOW synchronizes the ESP32 ground station and target device without a router or cloud dependency",
            "The ground station sends a trigger command and the target/slave device immediately transmits the ultrasonic pulse",
            "Low-latency communication improves timing coordination for ToF measurement"
          ]
        },
        {
          title: "Flutter Location View",
          items: [
            "Displays connection state, D1 distance, D2 distance and measured point count",
            "Plots the computed target device position visually inside the mobile app",
            "Shows raw line values, computed position and plotted position for debugging"
          ]
        },
        {
          title: "Experimental Validation",
          items: [
            "Compared experimental D1 and D2 values against actual reference distances",
            "Measured mean absolute errors of 0.76 inch for D1 and 0.83 inch for D2",
            "Achieved approximately 0.63% overall mean error in the report dataset"
          ]
        }
      ],
      protocolTitle: "Positioning Workflow",
      protocol: [
        {
          command: "ESP-NOW TRIGGER",
          purpose: "Ground station commands the target/slave device to transmit the ultrasonic pulse"
        },
        {
          command: "HC-SR04 ToF",
          purpose: "Ground-station anchor receivers measure ultrasonic travel time for D1 and D2"
        },
        {
          command: "d = v x t",
          purpose: "Convert ultrasonic travel time into distance"
        },
        {
          command: "Circle Intersection",
          purpose: "Estimate the target device position from two anchor-point distances"
        },
        {
          command: "Flutter Plot",
          purpose: "Display live distance values and plot the target location from the anchor perspective"
        }
      ],
      galleryTitle: "Hardware & Flutter Location View",
      gallery: [
        {
          src: "/images/projects/sonar-positioning-system/flutter-location-view.png",
          alt: "Flutter robot position screen showing D1, D2, point count and plotted sonar location",
          caption: "Flutter location view",
          orientation: "portrait",
          fit: "contain"
        },
        {
          src: "/images/projects/sonar-positioning-system/master-receiver-breadboard.jpeg",
          alt: "ESP32 target or slave device whose location is detected by the sonar ground station",
          caption: "Target device to be located",
          orientation: "portrait",
          fit: "contain"
        },
        {
          src: "/images/projects/sonar-positioning-system/dual-receiver-rig.jpeg",
          alt: "ESP32 ground station with two ultrasonic anchor receivers that define the location reference perspective",
          caption: "Ground station anchor setup",
          orientation: "portrait",
          fit: "contain"
        }
      ]
    }
  },
  {
    slug: "trading-business-management-system",
    title: "Trading Business Management System",
    description:
      "A C# Windows Forms desktop system for MS Malek Traders with secure login, OTP signup, role-based access, stock, invoices and payments.",
    image: {
      src: "/images/projects/trading-business-management/signup-screen.png",
      alt: "Trading Management System signup screen with OTP verification and role selection",
      fit: "contain"
    },
    techStack: ["C#", "WinForms", "SQL Server", "BCrypt", "OTP"],
    status: "Completed",
    githubUrl: tradingManagementRepositoryUrl,
    detailsUrl: "#trading-business-management-system",
    spotlight: {
      eyebrow: "OOP2 Desktop Application",
      title: "Trading Business Management System",
      summary:
        "A desktop-based management application developed for MS Malek Traders using C# Windows Forms and SQL Server. The system centralizes user management, customer accounts, inventory control, invoice generation and transaction tracking. It includes BCrypt password hashing, OTP-based email signup, role-based access control for Owner, Manager, Salesman, Stock Manager and Cashier, plus stock update and customer payment workflows designed to reduce manual work and improve business accuracy.",
      repositoryLabel: "Open GitHub Repository",
      documentationLabel: "View Project Report",
      documentationUrl: "/documents/projects/trading-business-management-system-report.pdf",
      stats: [
        {
          label: "Course",
          value: "Object Oriented Programming 2"
        },
        {
          label: "Platform",
          value: "C# Windows Forms"
        },
        {
          label: "Database",
          value: "SQL Server"
        },
        {
          label: "Security",
          value: "BCrypt + Email OTP"
        }
      ],
      featureGroups: [
        {
          title: "Authentication & Roles",
          items: [
            "Secure login with BCrypt password hashing and active account validation",
            "Email OTP verification during signup before creating a new inactive user account",
            "Role-based access for Owner, Manager, Salesman, Stock Manager and Cashier"
          ]
        },
        {
          title: "Business Operations",
          items: [
            "Owner and Manager roles can supervise daily operations, customer records and reports",
            "Salesman role can generate and record invoices while keeping restricted access boundaries",
            "Cashier role can view transactions, record partial payments and refresh due balances"
          ]
        },
        {
          title: "Inventory Management",
          items: [
            "Stock Manager can add or update products, quantities and unit prices",
            "Weighted average price calculation supports more accurate stock costing",
            "Duplicate product handling and database-safe stock updates improve data integrity"
          ]
        },
        {
          title: "Database Design",
          items: [
            "Normalized SQL Server schema with Roles, Users, Products, Stock, Customers, Invoices, InvoiceItems and Transactions",
            "Foreign keys connect invoices to customers/users and invoice items to products",
            "Transaction history records billed amount, paid amount, notes and customer due balance"
          ]
        }
      ],
      protocolTitle: "Core Modules",
      protocol: [
        {
          command: "Users + Roles",
          purpose: "Store authentication data, account status and permission level"
        },
        {
          command: "Customers",
          purpose: "Manage customer identity, shop information, contact details and active status"
        },
        {
          command: "Products + Stock",
          purpose: "Track product catalog, quantities, unit prices and stock update history"
        },
        {
          command: "Invoices",
          purpose: "Generate invoice headers with customer, creator, date, total and paid amount"
        },
        {
          command: "InvoiceItems",
          purpose: "Store product-level invoice line items with quantity, unit price and subtotal"
        },
        {
          command: "Transactions",
          purpose: "Record billed amount, partial payments, notes and customer payment history"
        }
      ],
      galleryTitle: "Application UI",
      gallery: [
        {
          src: "/images/projects/trading-business-management/signup-screen.png",
          alt: "MS Malek Traders signup screen with full name, email, email OTP, password, role selection and sign up action",
          caption: "Signup and OTP verification",
          orientation: "landscape",
          fit: "contain"
        }
      ]
    }
  },
  {
    slug: "digital-rpm-meter",
    title: "Digital RPM Meter",
    description:
      "A low-cost digital tachometer that counts IR sensor pulses in a fixed 6-second window and displays rotational speed through 7-segment counters.",
    image: {
      src: "/images/projects/digital-rpm-meter/project-image.jpeg",
      alt: "Digital RPM meter hardware prototype on a perfboard",
      fit: "contain"
    },
    techStack: ["IR Sensor", "555 Timer", "7408 AND Gate", "CD4026", "7-Segment"],
    status: "Course Project",
    githubUrl: rpmMeterRepositoryUrl,
    detailsUrl: "#digital-rpm-meter",
    videoPreview: {
      embedUrl: rpmMeterVideoEmbedUrl,
      title: "Digital RPM Meter project video"
    },
    spotlight: {
      eyebrow: "Digital Logic Project",
      title: "Digital RPM Meter",
      summary:
        "A Digital Logic and Circuits course project that measures motor shaft speed without a microcontroller. The system uses an IR sensor to detect one pulse per revolution, a 555 monostable stage to clean the pulse signal, a second 555 timer to create a 6-second measurement window, a 7408 AND gate to pass pulses only during that window, and cascaded CD4026 counters to drive three 7-segment displays. Because 6 seconds is one-tenth of a minute, the final RPM is calculated by multiplying the displayed count by 10.",
      repositoryLabel: "Open GitHub Repository",
      documentationLabel: "View Project Report",
      documentationUrl: "/documents/projects/digital-rpm-meter-report.pdf",
      videoLabel: "Watch Project Video",
      videoUrl: rpmMeterVideoUrl,
      stats: [
        {
          label: "Course",
          value: "Digital Logic And Circuits"
        },
        {
          label: "Measurement Window",
          value: "6 seconds"
        },
        {
          label: "RPM Scaling",
          value: "Pulse count x 10"
        },
        {
          label: "Estimated Cost",
          value: "385 BDT"
        }
      ],
      featureGroups: [
        {
          title: "Sensing",
          items: [
            "IR sensor detects a reflective mark on the rotating shaft",
            "One clean pulse is produced for each revolution",
            "Sensor alignment is critical for stable readings"
          ]
        },
        {
          title: "Signal Conditioning",
          items: [
            "555 monostable circuit filters noise and false triggering",
            "Pulse shaping improves counting reliability",
            "Timing can be adjusted for different RPM ranges"
          ]
        },
        {
          title: "Counting Logic",
          items: [
            "Second 555 timer creates the fixed 6-second measurement gate",
            "7408 AND gate allows pulses only while the timer is active",
            "Three CD4026 ICs cascade to drive three 7-segment displays"
          ]
        },
        {
          title: "Result",
          items: [
            "Successfully counted pulses during the active measurement window",
            "Example result: 120 pulses in 6 seconds equals 1200 RPM",
            "Best suited for moderate-speed laboratory motor testing"
          ]
        }
      ],
      protocolTitle: "Measurement Flow",
      protocol: [
        {
          command: "IR SENSOR",
          purpose: "Detects shaft rotation and generates pulses from the reflective marker"
        },
        {
          command: "555 FILTER",
          purpose: "Converts noisy sensor output into a single clean pulse per revolution"
        },
        {
          command: "6S TIMER",
          purpose: "Defines a fixed measurement window equal to one-tenth of a minute"
        },
        {
          command: "7408 AND",
          purpose: "Passes sensor pulses to the counter only while the timing gate is active"
        },
        {
          command: "CD4026",
          purpose: "Counts the gated pulses and drives the three 7-segment displays"
        }
      ],
      galleryTitle: "Project Images",
      gallery: [
        {
          src: "/images/projects/digital-rpm-meter/project-image.jpeg",
          alt: "Digital RPM meter assembled hardware prototype",
          caption: "Project image",
          orientation: "portrait",
          fit: "contain"
        },
        {
          src: "/images/projects/digital-rpm-meter/parts-view.png",
          alt: "Digital RPM meter parts view showing IR sensor, AND gate, timers, counter, and display",
          caption: "Parts view",
          orientation: "portrait",
          fit: "contain"
        },
        {
          src: "/images/projects/digital-rpm-meter/simulation.png",
          alt: "Digital RPM meter simulation circuit with logic gates, counters, and 7-segment displays",
          caption: "Simulation",
          orientation: "landscape",
          fit: "contain"
        }
      ]
    }
  }
] satisfies Project[];
