---
---

➜ Terraform_Challenge: Day [DAY] - [TITLE]
[[b;grey;]================================================================]
[[b;orange;][OBJECTIVE]]   : [Goal of the lab]
[[b;cyan;][TIME_EST]]    : [Reading Time from JSON]
[[b;purple;][CATEGORY]]    : Infrastructure as Code
[[b;grey;]----------------------------------------------------------------]

[[b;purple;]### 01_CONCEPTS]
• [Concept 1: Briefly explain the theory]
• [Concept 2: Why are we using this feature?]

[[b;purple;]### 02_HANDS_ON_LAB]
[[b;grey;]// Step 1: Initialize the configuration]
$ terraform init

[[b;grey;]// Step 2: [Your custom command here]]
$ [command]

[[b;purple;]### 03_CODE_SNIPPET]
[[b;grey;]resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}]

[[b;purple;]### 04_VERIFICATION]
[[b;green;][SUCCESS]] : Resource deployed and state updated.
[[b;orange;][WARNING]] : Don't forget to run 'terraform destroy' to save costs!

[[b;grey;]================================================================]
[[b;cyan;]PROMPT>_ Next lesson: [Next Topic Name]]

========//enhanched-technical//===========
SOURCE_LOG: Day [DAY] // [TITLE]
[[b;grey;]================================================================]
[[b;orange;][OBJECTIVE]]   : [One sentence goal]
[[b;cyan;][TIME_EST]]    : [Reading Time]
[[b;purple;][CATEGORY]]    : [e.g., Cloud Security / IaC / Automation]
[[b;grey;]----------------------------------------------------------------]

[[b;purple;]### 01_THE_CHALLENGE]
[Describe the problem you are solving today. Why does this matter?]

[[b;purple;]### 02_ARCHITECTURE_OVERVIEW]
[[b;grey;]// Key Components:]
• [Component A] -> [Function]
• [Component B] -> [Function]

[[b;purple;]### 03_TECHNICAL_LAB]
[[b;cyan;]Step 1: Configuration]
[[b;grey;]resource "aws_s3_bucket" "vault" {
  bucket = "tf-30-day-[DAY]"
  acl    = "private"
}]

[[b;cyan;]Step 2: Execution]
$ terraform plan -out=tfplan
$ terraform apply "tfplan"

[[b;purple;]### 04_POST_MORTEM]
[[b;green;][SUCCESS]] : [What went right?]
[[b;red;][CAUTION]] : [What common error should the reader avoid?]

[[b;grey;]================================================================]
[[b;orange;]PROMPT>_] [[b;white;]Next: Day [NEXT_DAY] - [NEXT_TITLE]]

============// enhanced project //=========
PROJECT_MANIFEST: [PROJECT_TITLE]
[[b;grey;]================================================================]
[[b;orange;][ID]]         : ${id}
[[b;cyan;][STATUS]]     : PROD_READY
[[b;purple;][STACK]]      : [e.g., AWS, Terraform, Docker]
[[b;grey;]----------------------------------------------------------------]

[[b;purple;]### 01_EXECUTIVE_SUMMARY]
[A high-level overview of what this project solves. Explain the "Business Value" here.]

[[b;purple;]### 02_ARCHITECTURE_DIAGRAM]
[[b;grey;]// Visual representation of the cloud flow]
[[@;;]/content/images/[project-id]-arch.png]

[[b;purple;]### 03_TECHNICAL_IMPLEMENTATION]
[[b;cyan;]>> Key Components:]
• [[b;white;]Component 1:] [Detailed description]
• [[b;white;]Component 2:] [Detailed description]

[[b;cyan;]>> Code Insight:]
[[b;grey;]resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  tags = { Name = "Production" }
}]

[[b;purple;]### 04_CHALLENGES_&_SOLUTIONS]
[[b;red;][ISSUE]] : [Describe a technical hurdle you faced]
[[b;green;][FIX]]   : [How you engineered around it]

[[b;grey;]================================================================]
[[b;orange;]EOF>_] View Source on [[b;cyan;]GitHub]

============// enhanced blog // ===============
BLOG_ENTRY: [BLOG_TITLE]
[[b;grey;]================================================================]
[[b;orange;][DATE]]       : [YYYY-MM-DD]
[[b;cyan;][READ_TIME]]  : [X min]
[[b;purple;][TAGS]]       : [Category]
[[b;grey;]----------------------------------------------------------------]

[[b;purple;]### 01_INTRODUCTION]
[Start with a hook. Why should someone read this guide today?]

[[b;purple;]### 02_DEEP_DIVE]
[Insert your main content here. Use the following formatting for impact:]

[[b;orange;][PRO_TIP]] : [A secret or best practice for this specific topic]

[[b;cyan;]>> Important Note:]
[Crucial information the reader shouldn't miss.]

[[b;purple;]### 03_ACTIONABLE_STEPS]
1. [Step one]
2. [Step two]

[[b;purple;]### 04_CONCLUSION]
[Final thoughts and a call to action.]

[[b;grey;]================================================================]
[[b;orange;]LOGOUT>_] Return to [[b;cyan;]/blogs]
