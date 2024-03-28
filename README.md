# Vernonia Municipal Code

The laws and guiding documents of the City of Vernonia.

https://vernonia-municipal-code.netlify.app/

## Purpose

* Make documents accessible and easy to use online.

* Simplify and standardize documents with the use, and within the constraints, of [Markdown](https://www.markdownguide.org/).

* Work towards using [GitHub](https://github.com/) and git workflows to create, maintain and collaborate on documents.

## Markdown

All documents are written with [GitHub Flavored Markdown](https://github.github.com/gfm/) and styled for the web using [github-markdown-css](https://github.com/sindresorhus/github-markdown-css). The only exception to the use of pure Markdown is `<sup>i</sup>` tags for superscript.

Document files use `.markdown` extension.

## Format and Front Matter

Each document type has its own format and front matter spec.

### Standard Operating Procedures (SOP)

File convention: `standard-operating-procedures\<NAME-LOWERCASE-HYPHENATED>.markdown`

A SOP is a single document with numbered `H2` headings separating sections. Sections can contain paragraphs, lists, tables and blockquotes as needed.

**Format**

```markdown
# About and Usage

About this...

# Contents

[1. Section one](#1-section-one)

[2. Section two](#2-section-two)

[3. Section three](#3-section-three)

## 1. Section one

Do this...

## 2. Section two

Then do this...

## 3. Section three

Finally do this...
```

**Front matter**

```yaml
# SOP name
title: Floodplain Development
# concise description
description: Standard operating procedures for managing development within the floodplain.
# permalink in relation to the root of the project for the web
permalink: /standard-operating-procedures/floodplain-development/
# jekyll layout
layout: standard-operating-procedures
# is this document authoritative
authoritative: false
```

---

The City of Vernonia is an Equal Opportunity Employer and Provider

Copyright &copy; 2024 City of Vernonia

Made with :heart: and :coffee: in Vernonia, Oregon
