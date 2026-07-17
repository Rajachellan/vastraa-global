import Image from "next/image"
export default function PopupForm(){
    return(
        <>
        <div className="max-w-3xl mx-auto rounded-[32px] overflow-hidden bg-[#F8F5F0] shadow-2xl border border-[#E8DDCC] p-8 md:p-12">

  {/* Logo */}
  <div className="text-center mb-8 ">
    <Image
      src="/images/logo.png"
      alt="Vastraa Global"
      className="w-24 sm:w-32 h-auto object-contain mx-auto mb-4"
      width={128}
      height={64}
    />

    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0A2342]">
      Request a Custom Quote
    </h2>

    <div className="flex items-center justify-center gap-4 my-5">
      <div className="w-16 h-px bg-[#D4AF37]" />
      <div className="text-[#D4AF37] text-xl">✦</div>
      <div className="w-16 h-px bg-[#D4AF37]" />
    </div>

    <p className="text-[#5C6470] text-sm md:text-base">
      Share your requirements and our textile specialists will
      get back to you with the best solution.
    </p>
  </div>

  <form className="space-y-6">

    {/* Name */}
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Full Name *
      </label>
      <input
        type="text"
        placeholder="Enter your full name"
        className="w-full h-14 rounded-xl border border-gray-300 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      />
    </div>

    {/* Company */}
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Company Name
      </label>
      <input
        type="text"
        placeholder="Enter company name"
        className="w-full h-14 rounded-xl border border-gray-300 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      />
    </div>

    {/* Email */}
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Email Address *
      </label>
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full h-14 rounded-xl border border-gray-300 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      />
    </div>

    {/* Phone */}
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Phone / WhatsApp *
      </label>
      <input
        type="tel"
        placeholder="Enter your contact number"
        className="w-full h-14 rounded-xl border border-gray-300 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      />
    </div>

    {/* Country */}
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Country
      </label>
      <input
        type="text"
        placeholder="Enter your country"
        className="w-full h-14 rounded-xl border border-gray-300 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      />
    </div>

    {/* Product Type */}
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Product Category *
      </label>

      <select className="w-full h-14 rounded-xl border border-gray-300 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
        <option>Select Product Type</option>
        <option>Printed Fabrics</option>
        <option>Home Textiles</option>
        <option>Fashion Fabrics</option>
        <option>Custom Textile Design</option>
        <option>Private Label Production</option>
      </select>
    </div>

    {/* Fabric Type */}
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Fabric Type
      </label>

      <select className="w-full h-14 rounded-xl border border-gray-300 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
        <option>Select Fabric</option>
        <option>Cotton</option>
        <option>Silk</option>
        <option>Linen</option>
        <option>Viscose</option>
        <option>Polyester</option>
        <option>Custom Requirement</option>
      </select>
    </div>

    {/* Quantity */}
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Estimated Quantity
      </label>

      <input
        type="text"
        placeholder="Ex: 500 Meters/pieces"
        className="w-full h-14 rounded-xl border border-gray-300 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      />
    </div>

    {/* Description */}
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Project Description *
      </label>

      <textarea
        rows={6}
        placeholder="Describe your design requirements, colors, patterns, printing method, dimensions, quantity, delivery timeline and any special instructions."
        className="w-full rounded-xl border border-gray-300 px-4 py-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-none"
      />
    </div>

    {/* Upload */}
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Upload Design / Artwork
      </label>

      <div className="border-2 border-dashed border-[#D4AF37] rounded-2xl p-10 text-center bg-white">
        <div className="text-[#D4AF37] text-4xl mb-3">
          ☁
        </div>

        <p className="text-sm text-gray-600">
          Click to upload or drag & drop
        </p>

        <p className="text-xs text-gray-500 mt-2">
          PDF, JPG, PNG, AI, PSD (Max 20MB)
        </p>

        <input
          type="file"
          className="hidden"
        />
      </div>
    </div>

    {/* Timeline */}
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Required Delivery Timeline
      </label>

      <input
        type="text"
        placeholder="Ex: Within 30 days"
        className="w-full h-14 rounded-xl border border-gray-300 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      />
    </div>

    {/* Submit */}
    <button
      type="submit"
      className="w-full h-16 rounded-xl bg-gradient-to-r from-[#C99A2E] to-[#D4AF37] text-white font-semibold text-lg shadow-lg hover:opacity-90 transition"
    >
      Submit Enquiry
    </button>

  </form>
</div>
        </>
    )
}