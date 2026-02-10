#!/bin/bash

# DevOps challenge topics array
declare -a topics=(
  "INTRODUCTION TO DEVOPS"
  "LINUX BASICS - FILE SYSTEM"
  "LINUX BASICS - USERS & PERMISSIONS"
  "SHELL SCRIPTING FUNDAMENTALS"
  "SHELL SCRIPTING - CONTROL FLOW"
  "PACKAGE MANAGEMENT"
  "PROCESS MANAGEMENT"
  "SYSTEM MONITORING BASICS"
  "LOG MANAGEMENT"
  "CRON JOBS & SCHEDULING"
  "NETWORKING FUNDAMENTALS"
  "TCP/IP & OSI MODEL"
  "DNS & DOMAIN MANAGEMENT"
  "HTTP/HTTPS PROTOCOLS"
  "GIT BASICS"
  "GIT BRANCHING STRATEGIES"
  "GIT WORKFLOW & COLLABORATION"
  "GITHUB/GITLAB ESSENTIALS"
  "GIT ADVANCED COMMANDS"
  "GIT HOOKS & AUTOMATION"
  "DOCKER INTRODUCTION"
  "DOCKER IMAGES & CONTAINERS"
  "DOCKERFILE BEST PRACTICES"
  "DOCKER VOLUMES & STORAGE"
  "DOCKER NETWORKING"
  "DOCKER COMPOSE"
  "MULTI-CONTAINER APPLICATIONS"
  "DOCKER REGISTRY & HUB"
  "CONTAINER SECURITY"
  "DOCKER OPTIMIZATION"
  "KUBERNETES ARCHITECTURE"
  "PODS & CONTAINERS"
  "DEPLOYMENTS & REPLICASETS"
  "SERVICES & NETWORKING"
  "CONFIGMAPS & SECRETS"
  "PERSISTENT VOLUMES"
  "STATEFULSETS"
  "DAEMONSETS & JOBS"
  "INGRESS & LOAD BALANCING"
  "HELM PACKAGE MANAGER"
  "CI/CD FUNDAMENTALS"
  "JENKINS SETUP & CONFIGURATION"
  "JENKINS PIPELINES"
  "GITHUB ACTIONS BASICS"
  "GITHUB ACTIONS WORKFLOWS"
  "GITLAB CI/CD"
  "PIPELINE DESIGN PATTERNS"
  "AUTOMATED TESTING"
  "DEPLOYMENT STRATEGIES"
  "ROLLBACK & RECOVERY"
  "IAC PRINCIPLES"
  "TERRAFORM BASICS"
  "TERRAFORM STATE MANAGEMENT"
  "TERRAFORM MODULES"
  "ANSIBLE INTRODUCTION"
  "ANSIBLE PLAYBOOKS"
  "ANSIBLE ROLES & GALAXY"
  "CLOUDFORMATION BASICS"
  "ARM TEMPLATES"
  "PULUMI & CDK"
  "CLOUD COMPUTING BASICS"
  "AWS CORE SERVICES"
  "AWS NETWORKING (VPC)"
  "AWS IAM & SECURITY"
  "AZURE FUNDAMENTALS"
  "AZURE DEVOPS"
  "GCP ESSENTIALS"
  "CLOUD STORAGE SOLUTIONS"
  "CLOUD DATABASES"
  "SERVERLESS COMPUTING"
  "MONITORING FUNDAMENTALS"
  "PROMETHEUS SETUP"
  "PROMETHEUS QUERIES"
  "GRAFANA DASHBOARDS"
  "ALERTMANAGER"
  "LOG AGGREGATION - ELK STACK"
  "ELASTICSEARCH BASICS"
  "KIBANA VISUALIZATION"
  "DISTRIBUTED TRACING"
  "APM TOOLS"
  "DEVSECOPS PRINCIPLES"
  "SECURITY SCANNING TOOLS"
  "VULNERABILITY ASSESSMENT"
  "SECRETS MANAGEMENT"
  "HASHICORP VAULT"
  "CONTAINER SECURITY SCANNING"
  "SAST & DAST"
  "COMPLIANCE AS CODE"
  "SECURITY HARDENING"
  "INCIDENT RESPONSE"
  "SERVICE MESH BASICS"
  "ISTIO INTRODUCTION"
  "GITOPS PRINCIPLES"
  "ARGOCD & FLUXCD"
  "CHAOS ENGINEERING"
  "SRE PRACTICES"
  "PERFORMANCE TUNING"
  "DISASTER RECOVERY"
  "MULTI-CLOUD STRATEGY"
  "DEVOPS BEST PRACTICES"
)

# Create content directory if it doesn't exist
mkdir -p content/posts/devops-100

# Generate files for days 00-99
for i in {0..99}; do
  # Format day number with leading zero
  day=$(printf "%02d" $i)
  title="${topics[$i]}"

  # Determine status (Day 00 locked, Day 01 active, rest locked)
  if [ $i -eq 0 ]; then
    status="locked"
  elif [ $i -eq 1 ]; then
    status="active"
  else
    status="locked"
  fi

  # Create the markdown file
  cat > "content/posts/devops-100/devops-day${day}.md" << EOF
---
day: ${day}
title: ${title}
status: ${status}
---

DevOps_Challenge: Day ${day} - ${title}
[[b;grey;]================================================================]
[[b;orange;][OBJECTIVE]]   : Master ${title}
[[b;cyan;][TIME_EST]]    : 30-45 min
[[b;purple;][CATEGORY]]    : DevOps Engineering
[[b;grey;]----------------------------------------------------------------]

[[b;purple;]### 01_CONCEPTS]
• Understanding ${title}
• Key concepts and best practices
• Real-world applications

[[b;purple;]### 02_HANDS_ON_LAB]
[[b;grey;]// Lab instructions coming soon]
\$ echo "Day ${day}: ${title}"

[[b;purple;]### 03_VERIFICATION]
[[b;green;][SUCCESS]] : Lab completed successfully.
[[b;orange;][NEXT]]    : Proceed to Day $(printf "%02d" $((i + 1)))

[[b;grey;]================================================================]
EOF

  echo "Created devops-day${day}.md - ${title}"
done

echo "All 100 DevOps challenge files created successfully!"
