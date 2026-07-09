import type { LabProject } from "@/features/portfolio/types";

export const labProjects = [
  {
    title: "Scalable Home Automation",
    description:
      "Exploring modular device control patterns, sensor nodes, and expansion-friendly automation architecture.",
    focus: "Distributed IoT",
    tools: ["ESP32", "MQTT", "Sensors"]
  },
  {
    title: "AI Pet Robot",
    description:
      "Researching small robot interaction, behavior loops, object response, and lightweight intelligence on constrained hardware.",
    focus: "Human-Robot Interaction",
    tools: ["Robotics", "AI", "Embedded Control"]
  },
  {
    title: "ESP32 Experiments",
    description:
      "Testing wireless communication, low-power modes, sensor pipelines, and practical firmware patterns on ESP32 boards.",
    focus: "Firmware Lab",
    tools: ["ESP32", "C/C++", "Wi-Fi"]
  },
  {
    title: "Bluetooth Mesh",
    description:
      "Investigating node-to-node communication, local device discovery, and resilient control behavior across connected devices.",
    focus: "Connected Devices",
    tools: ["BLE", "Mesh", "IoT"]
  },
  {
    title: "Edge AI",
    description:
      "Studying how inference can run closer to sensors for faster decisions, lower latency, and privacy-aware systems.",
    focus: "On-device Inference",
    tools: ["Edge AI", "Sensors", "Optimization"]
  },
  {
    title: "TinyML",
    description:
      "Experimenting with compact models, embedded inference constraints, and practical AI workflows for microcontrollers.",
    focus: "Microcontroller AI",
    tools: ["TinyML", "TensorFlow Lite", "MCU"]
  }
] satisfies LabProject[];
