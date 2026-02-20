import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { motion } from "motion/react";
import { Building2, Loader2, ChevronRight, ChevronDown } from "lucide-react";

export function BusinessVerification() {
  const navigate = useNavigate();
  const location = useLocation();
  // Prefill owner name and email from previous signup state (if any)
  useEffect(() => {
    const st = (location.state as any) || {};
    if (st.name) setOwnerName(st.name);
    if (st.email) setEmail(st.email);
  }, [location.state]);
  const [pan, setPan] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [companyData, setCompanyData] = useState<any>(null);

  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");

  // Editable fields state
  const [editableDetails, setEditableDetails] = useState({
    companyName: "",
    gstNumber: "",
    establishmentYear: "",
    address: ""
  });

  const handlePanChange = (value: string) => {
    setPan(value.toUpperCase());

    // Simulate auto-fetch when PAN is complete (10 characters)
    if (value.length === 10) {
      setIsLoading(true);
      setTimeout(() => {
        // Simulated response: PAN may map to multiple GST numbers
        const fetchedData = {
          gstNumbers: [
            "29AABCU9603R1ZX",
            "29AABCU9603R2XX",
            "29AABCU9603R3YY",
          ],
          companyName: "Acme Solutions Private Limited",
          establishmentYear: "2018",
          address: "Plot No. 42, Electronic City Phase 1, Bangalore, Karnataka - 560100",
        };
        setCompanyData(fetchedData);
        // default to first GST number
        setEditableDetails({
          ...fetchedData,
          gstNumber: fetchedData.gstNumbers[0],
        });
        setIsLoading(false);
      }, 1500);
    } else {
      setCompanyData(null);
    }
  };

  const handleDetailsChange = (field: string, value: string) => {
    setEditableDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContinue = () => {
    if (pan.length === 10 && companyData) {
      // Proceed directly to HSN setup, passing collected details
      navigate("/hsn-setup", { state: { ownerName, email, editableDetails } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            OpportunityX
          </h1>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200 px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                1
              </div>
              <span className="text-sm text-indigo-600">Business Verification</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center">
                2
              </div>
              <span className="text-sm text-gray-500">HSN Setup</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-2">Verify Your Business</h2>
            <p className="text-gray-600">Enter your PAN to fetch and verify company details</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT: Input Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-fit">
              <h3 className="text-xl mb-6 font-semibold">Enter Details</h3>

              <div className="mb-6">
                <label className="text-sm text-gray-700 mb-2 block font-medium">
                  Business PAN <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={pan}
                  onChange={(e) => handlePanChange(e.target.value)}
                  placeholder="AABCU9603R"
                  maxLength={10}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all uppercase"
                />
                <p className="text-xs text-gray-500 mt-1">Enter 10-character PAN number</p>
              </div>

              <div className="mb-6">
                <label className="text-sm text-gray-700 mb-2 block font-medium">
                  Owner Name
                </label>
                <input
                  type="text"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  placeholder="Enter owner name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="mb-6">
                <label className="text-sm text-gray-700 mb-2 block font-medium">
                  Business Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  We will automatically fetch your business details from the official registry based on your PAN.
                </p>
              </div>
            </div>

            {/* RIGHT: Fetched Company Data (Editable) */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Company Information</h3>
              </div>

              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mb-4" />
                  <p className="text-gray-600">Fetching company details...</p>
                </div>
              ) : companyData ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">GST Number</label>
                    {companyData && companyData.gstNumbers ? (
                      <div className="relative">
                        <select
                          value={editableDetails.gstNumber}
                          onChange={(e) => handleDetailsChange('gstNumber', e.target.value)}
                          className="w-full px-4 py-3 pr-10 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none"
                        >
                          {companyData.gstNumbers.map((gst: string) => (
                            <option key={gst} value={gst}>{gst}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                          <ChevronDown className="w-5 h-5 text-indigo-500" />
                        </div>
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={editableDetails.gstNumber}
                        onChange={(e) => handleDetailsChange('gstNumber', e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    )}
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Company Name</label>
                    <input
                      type="text"
                      value={editableDetails.companyName}
                      onChange={(e) => handleDetailsChange('companyName', e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Establishment Year</label>
                    <input
                      type="text"
                      value={editableDetails.establishmentYear}
                      onChange={(e) => handleDetailsChange('establishmentYear', e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Address</label>
                    <textarea
                      value={editableDetails.address}
                      onChange={(e) => handleDetailsChange('address', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100">
                      <Building2 className="w-8 h-8 text-gray-300" />
                    </div>
                    <p className="text-gray-500">Details will appear here</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Continue Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleContinue}
              disabled={!companyData || pan.length !== 10}
              className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-12 py-3.5 rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <span>Continue</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
