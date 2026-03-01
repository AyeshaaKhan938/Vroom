export type CheckoutOrder = {
  id: number
  reference: string
  status: string
  cart: {
    product: string
    package?: string | null
    quantity: number
    unit_price: number
    service_fee: number
    gst_rate: number
    promo_code?: string | null
  }
  billing?: BillingPayload | null
  customer: {
    name: string | null
    email: string | null
    phone: string | null
  }
  payment: {
    method: string | null
    details: {
      status: string
      transaction_id: string
      paid_at: string
    } | null
  }
  amounts: {
    subtotal: number
    service_fee: number
    tax: number
    total: number
    currency: string
  }
  booking_reference?: string | null
  created_at: string
  updated_at: string
  metadata?: Record<string, unknown> | null
}

export type PricingConfig = {
  product: string
  package: string
  unitPrice: number
  serviceFee: number
  gstRate: number
}

export type CartPayload = {
  quantity: number
  promoCode?: string
}

export type BillingPayload = {
  first_name: string
  last_name: string
  email: string
  phone: string
  street_address: string
  city: string
  state: string
  postal_code: string
  country: string
  emergency_contact_name: string
  emergency_phone: string
  relationship: string
  subscribe_newsletter?: boolean
  sms_notifications?: boolean
}

export type PaymentPayload = {
  payment_method: string
  payment_proof: File
}

export type CheckoutApiResponse = {
  order: CheckoutOrder
}

