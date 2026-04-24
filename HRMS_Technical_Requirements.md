# HRMS Desktop App Technical Requirements

## 1. Project Overview
Build a high-performance Desktop Human Resources Management System (HRMS) inspired by Samsung One UI 8.5 aesthetics. The application must be fully bilingual with Arabic RTL and English LTR support, designed for maximum simplicity, clarity, and fast user workflows.

### Goals
- Desktop application with modern visuals and responsive performance.
- Full offline-first support with Realm DB local persistence and optional synchronization.
- Seamless language switching with instant RTL/LTR layout swap.
- Modular architecture to support Employee Management, Payroll & Compliance, and Leaves & Attendance.

## 2. UI/UX Design Language (One UI 8.5 Implementation)

### Visual Style
- Large squircle icons.
- Spacious cards with soft shadows and subtle depth.
- High-contrast interactive elements for quick recognition.
- Clean white/dark neutral backgrounds with accent colors matching One UI.

### Layout
- Viewing Area: Top section for headers, summaries, and KPIs using large bold typography.
- Interaction Area: Lower section for actionable controls, tables, forms, and navigation.
- Wide sidebar for quick module switching, with clear icons and text labels.

### Typography
- Primary font: `Saqalah Al Majalla` for both Arabic and English.
- Headers: Extra bold, large scale.
- Body text: Clean and legible, with generous spacing.

### Navigation
- Wide left or right sidebar depending on language direction.
- Consistent module cards and tabs.
- Quick access to recent employees, pending approvals, and alerts.

## 3. Core Modules

### A. Employee Management (Personnel)
- Digital employee profiles containing personal data, contracts, job details, and official documents.
- Document management for IDs, passports, contracts, and certifications.
- Automated expiry alerts for key documents.
- Visual organization chart showing company hierarchy and reporting lines.
- Search and filter for employee status, department, location, and contract type.

### B. Payroll & Compliance (WPS Integrated)
- Payroll engine calculating:
  - Basic salary
  - Housing allowance
  - Transportation allowance
  - Deductions
  - GOSI (Social Insurance)
- WPS support for generating Salary Information Files (SIF).
- Compliance with local banking formats and Mudad platform requirements.
- Professional digital payslips ready for export or printing.

### C. Leaves & Attendance
- Leave request workflow with automated approval cycles:
  - Employee -> Manager -> HR
- Real-time leave balance tracking for annual, sick, and emergency leave.
- Leave history, pending approvals, and entitlement summaries.
- Attendance integration for absence and presence records.

## 4. Backend & Database (Realm DB)

### Database Engine
- Use Realm DB for local database storage.
- Support offline-first mode with background sync when connected.
- Keep the application fully functional without internet access.

### Requirements
- Offline-first architecture with local persistence.
- Background synchronization and conflict handling for remote sync.
- Real-time UI updates immediately reflect database changes.
- Performance optimized for thousands of employees and payroll transactions.
- Near-zero latency UI binding.

## 5. Localization & Internationalization (i18n)

### Dual Language Support
- Full support for Arabic (RTL) and English (LTR).
- All UI text, controls, forms, validation messages, and date formatting localized.

### Dynamic Toggle
- Instant language switching without restarting the app.
- Automatic layout mirroring based on selected language.

### Localized Formatting
- Date formats for both Hijri and Gregorian calendars.
- Currency formatting localized for local payroll and benefits.
- Numeric and date entry fields adapt to selected language conventions.

## 6. Architecture & Implementation Notes

### Framework Choice
- Preferred modern desktop frameworks: Electron or Flutter.
- Use a component-based, modular architecture.
- Separate UI, business logic, and data layers.

### Performance Focus
- High-performance payroll engine with efficient rules and batch calculations.
- Real-time data binding through Realm.
- Optimized rendering and list virtualization for large datasets.

### Design System
- One UI 8.5-inspired components:
  - Large squircle buttons and icons
  - Spacious cards
  - Clean forms with high-contrast inputs
  - Soft shadow effect for depth
- Use `Saqalah Al Majalla` as the global font across all screens.

### Module Separation
- Employee Management
- Payroll & Compliance
- Leaves & Attendance
- Settings & Localization
- Notifications and alerts

## 7. AI Coder Prompt
"Act as a Senior Software Engineer. Build a Desktop HRMS using a modern framework (like Electron or Flutter) integrated with Realm DB. Implement a UI that strictly follows Samsung One UI 8.5 principles: large squircle icons, massive buttons, and clean cards. Use 'Saqalah Al Majalla' as the global font. Ensure the architecture is modular and supports RTL/LTR switching seamlessly. Focus on high performance for the Payroll engine and real-time data binding via Realm."

## 8. Quality & Usability
- Minimal, intuitive workflows for HR tasks.
- High-contrast, accessible controls.
- Responsive to keyboard and mouse usage.
- Smooth transitions between modules and languages.
- Built-in alerts for document expiries, payroll issues, and leave approvals.

## 9. Deliverables
- Desktop HRMS application with Employee, Payroll, and Leave modules.
- Realm DB-backed offline-first architecture.
- RTL/LTR bilingual support with instant toggling.
- One UI 8.5-inspired UI styling.
- Payroll engine with WPS/SIF export capability.
- Real-time data binding and instant dashboard updates.
