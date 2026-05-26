import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

// ── Helper: send via Elastic Email v2 ───────────────────────────────────────
async function sendEmail({
  to,
  subject,
  bodyHtml,
}: {
  to: string
  subject: string
  bodyHtml: string
}) {
  const apiKey = process.env.ELASTIC_EMAIL_API_KEY
  if (!apiKey) {
    console.warn('⚠️ WARNING: ELASTIC_EMAIL_API_KEY is not set. Simulating email send and logging to console.')
    console.log('--------------------------------------------------')
    console.log(`[MOCKED EMAIL]`)
    console.log(`To: ${to}`)
    console.log(`Subject: ${subject}`)
    console.log(`Body HTML Length: ${bodyHtml.length} chars`)
    console.log('--------------------------------------------------')
    return { success: true, mocked: true }
  }

  const params = new URLSearchParams()
  params.append('apikey', apiKey)
  params.append('from', 'contact@flurbix.com')
  params.append('fromName', 'Flurbix')
  params.append('to', to)
  params.append('subject', subject)
  params.append('bodyHtml', bodyHtml)
  params.append('isTransactional', 'true')

  const response = await fetch('https://api.elasticemail.com/v2/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params,
  })

  const data = await response.json()

  if (!data.success) {
    throw new Error(data.error || 'Failed to send email via Elastic Email')
  }

  return data
}

// ── Team notification email ──────────────────────────────────────────────────
function buildTeamEmailHtml({
  name,
  email,
  company,
  phone,
  subject,
  message,
}: {
  name: string
  email: string
  company: string
  phone: string
  subject: string
  message: string
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission — Flurbix</title>
</head>
<body style="margin:0;padding:0;background:#F8FAFC;font-family:'DM Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0F172A 0%,#1E293B 100%);padding:32px 40px;text-align:center;">
              <div style="font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">
                Flurbi<span style="color:#06B6D4;">x</span>
              </div>
              <p style="color:#94A3B8;font-size:13px;margin:8px 0 0;">Campaign Operations Platform</p>
            </td>
          </tr>
          <!-- Alert badge -->
          <tr>
            <td style="padding:32px 40px 0;">
              <div style="display:inline-block;background:linear-gradient(90deg,rgba(6,182,212,0.1),rgba(139,92,246,0.1));border:1px solid rgba(6,182,212,0.3);border-radius:100px;padding:6px 16px;font-size:12px;font-weight:600;color:#06B6D4;letter-spacing:0.5px;text-transform:uppercase;">
                📬 New Contact Submission
              </div>
              <h1 style="font-size:22px;font-weight:700;color:#0F172A;margin:16px 0 8px;">You have a new message</h1>
              <p style="color:#64748B;font-size:14px;margin:0 0 24px;">Someone reached out through the Flurbix contact form.</p>
            </td>
          </tr>
          <!-- Details card -->
          <tr>
            <td style="padding:0 40px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;border-radius:12px;border:1px solid #E2E8F0;overflow:hidden;">
                ${[
                  ['Full Name', name],
                  ['Email', email],
                  ['Company', company || '—'],
                  ['Phone', phone || '—'],
                  ['Subject', subject],
                ].map(([label, value], i) => `
                <tr style="border-bottom:1px solid #E2E8F0;">
                  <td style="padding:14px 20px;font-size:12px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.5px;width:120px;">${label}</td>
                  <td style="padding:14px 20px;font-size:14px;color:#0F172A;font-weight:500;">${value}</td>
                </tr>`).join('')}
                <tr>
                  <td colspan="2" style="padding:20px;">
                    <p style="font-size:12px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 10px;">Message</p>
                    <p style="font-size:14px;color:#334155;line-height:1.7;margin:0;white-space:pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- CTA -->
          <tr>
            <td style="padding:0 40px 40px;text-align:center;">
              <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#06B6D4,#8B5CF6);color:#ffffff;font-size:14px;font-weight:700;padding:14px 32px;border-radius:10px;text-decoration:none;letter-spacing:0.3px;">
                Reply to ${name} →
              </a>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#F8FAFC;border-top:1px solid #E2E8F0;padding:24px 40px;text-align:center;">
              <p style="font-size:12px;color:#94A3B8;margin:0;">© 2025 Flurbix Inc. · <a href="https://www.flurbix.io" style="color:#06B6D4;text-decoration:none;">flurbix.io</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
}

// ── Confirmation email to sender ─────────────────────────────────────────────
function buildConfirmationEmailHtml({ name }: { name: string }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We received your message — Flurbix</title>
</head>
<body style="margin:0;padding:0;background:#F8FAFC;font-family:'DM Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0F172A 0%,#1E293B 100%);padding:32px 40px;text-align:center;">
              <div style="font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">
                Flurbi<span style="color:#06B6D4;">x</span>
              </div>
              <p style="color:#94A3B8;font-size:13px;margin:8px 0 0;">Campaign Operations Platform</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h1 style="font-size:24px;font-weight:700;color:#0F172A;margin:0 0 16px;">
                Hi ${name}, we got your message! 👋
              </h1>
              <p style="font-size:15px;color:#475569;line-height:1.7;margin:0 0 20px;">
                Thank you for reaching out to Flurbix. Our team has received your message and will get back to you within <strong style="color:#0F172A;">1–2 business days</strong>.
              </p>
              <p style="font-size:15px;color:#475569;line-height:1.7;margin:0 0 32px;">
                In the meantime, feel free to explore our platform, read our latest docs, or follow us on social media.
              </p>
              <!-- Divider -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(90deg,#06B6D4,#8B5CF6);height:2px;border-radius:2px;margin-bottom:32px;">
                <tr><td></td></tr>
              </table>
              <!-- Quick links -->
              <p style="font-size:12px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 16px;">Quick Links</p>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right:12px;">
                    <a href="https://www.flurbix.io" style="display:inline-block;background:#F1F5F9;color:#0F172A;font-size:13px;font-weight:600;padding:10px 20px;border-radius:8px;text-decoration:none;border:1px solid #E2E8F0;">
                      🌐 Visit Website
                    </a>
                  </td>
                  <td style="padding-right:12px;">
                    <a href="https://www.flurbix.io/#pricing" style="display:inline-block;background:#F1F5F9;color:#0F172A;font-size:13px;font-weight:600;padding:10px 20px;border-radius:8px;text-decoration:none;border:1px solid #E2E8F0;">
                      💰 View Pricing
                    </a>
                  </td>
                  <td>
                    <a href="https://www.flurbix.io/#product" style="display:inline-block;background:linear-gradient(135deg,#06B6D4,#8B5CF6);color:#ffffff;font-size:13px;font-weight:700;padding:10px 20px;border-radius:8px;text-decoration:none;">
                      🚀 Start Free Trial
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#F8FAFC;border-top:1px solid #E2E8F0;padding:24px 40px;text-align:center;">
              <p style="font-size:12px;color:#94A3B8;margin:0 0 6px;">© 2025 Flurbix Inc. All rights reserved.</p>
              <p style="font-size:12px;color:#94A3B8;margin:0;">
                <a href="https://www.flurbix.io" style="color:#06B6D4;text-decoration:none;">flurbix.io</a>
                &nbsp;·&nbsp;
                <a href="https://twitter.com/flurbix" style="color:#06B6D4;text-decoration:none;">Twitter</a>
                &nbsp;·&nbsp;
                <a href="https://linkedin.com/company/flurbix" style="color:#06B6D4;text-decoration:none;">LinkedIn</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
}

// ── Input validation ─────────────────────────────────────────────────────────
function validateInput(body: Record<string, unknown>) {
  const { name, email, subject, message } = body
  const errors: string[] = []

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Full name must be at least 2 characters.')
  }
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('A valid email address is required.')
  }
  if (!subject || typeof subject !== 'string' || subject.trim().length < 2) {
    errors.push('Please select a subject.')
  }
  if (!message || typeof message !== 'string' || message.trim().length < 20) {
    errors.push('Message must be at least 20 characters.')
  }

  return errors
}

// ── POST handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const errors = validateInput(body)

    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 })
    }

    const name = String(body.name).trim()
    const email = String(body.email).trim().toLowerCase()
    const company = String(body.company || '').trim()
    const phone = String(body.phone || '').trim()
    const subject = String(body.subject).trim()
    const message = String(body.message).trim()

    // Send notification to the Flurbix team
    const teamEmailResponse = await sendEmail({
      to: 'contact@flurbix.com',
      subject: `[Contact Form] ${subject} — from ${name}`,
      bodyHtml: buildTeamEmailHtml({ name, email, company, phone, subject, message }),
    })
    console.log('Team email response:', teamEmailResponse)

    // Send confirmation to the submitter
    const confirmationEmailResponse = await sendEmail({
      to: email,
      subject: `We received your message — Flurbix`,
      bodyHtml: buildConfirmationEmailHtml({ name }),
    })
    console.log('Confirmation email response:', confirmationEmailResponse)

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully! We\u2019ll be in touch soon.",
    })
  } catch (err) {
    console.error('[Contact API Error]', err)
    return NextResponse.json(
      { success: false, errors: ['Server error. Please try again later.'] },
      { status: 500 }
    )
  }
}
