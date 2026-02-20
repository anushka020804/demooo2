import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Building2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit2,
  Save,
  X,
  FileText,
  CheckCircle2,
  AlertCircle,
  Download
} from "lucide-react";

export function UserProfile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    companyName: "Acme Solutions Private Limited",
    gstNumber: "29AABCU9603R1ZX",
    pan: "AABCU9603R",
    establishmentYear: "2018",
    address: "Plot No. 42, Electronic City Phase 1, Bangalore, Karnataka - 560100",
    ownerName: "Rajesh Kumar",
    email: "rajesh@acmesolutions.com",
    mobile: "+91 98765 43210",
  });

  const [editData, setEditData] = useState(profileData);

  const documents = [
    { name: "Company Registration", status: "verified", uploadedDate: "Jan 15, 2026" },
    { name: "GST Certificate", status: "verified", uploadedDate: "Jan 15, 2026" },
    { name: "PAN Card", status: "pending", uploadedDate: "Jan 20, 2026" },
    { name: "Financial Statements", status: "verified", uploadedDate: "Jan 18, 2026" },
    { name: "Compliance Docs", status: "pending", uploadedDate: "-" },
  ];

  const hsnCodes = [
    { code: "7326", keyword: "Steel Fasteners" },
    { code: "8481", keyword: "Industrial Valves" },
  ];

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-2xl bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Profile
            </h1>
          </div>

          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Edit2 className="w-4 h-4" />
              <span>Edit Profile</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>Save</span>
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                <X className="w-4 h-4" />
                <span>Cancel</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col gap-6">
          {/* Left Column - Profile Info */}
          <div className="space-y-6">
            {/* Company Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl">Company Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Company Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.companyName}
                      onChange={(e) => setEditData({ ...editData, companyName: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <p className="text-gray-900">{profileData.companyName}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm text-gray-600 mb-2 block">GST Number</label>
                  <p className="text-gray-900 flex items-center gap-2">
                    {profileData.gstNumber}
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </p>
                </div>

                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Business PAN</label>
                  <p className="text-gray-900 flex items-center gap-2">
                    {profileData.pan}
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </p>
                </div>

                <div>
                  <label className="text-sm text-gray-600 mb-2 block flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Establishment Year
                  </label>
                  <p className="text-gray-900">{profileData.establishmentYear}</p>
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm text-gray-600 mb-2 block flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Address
                  </label>
                  {isEditing ? (
                    <textarea
                      value={editData.address}
                      onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                      rows={2}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <p className="text-gray-900">{profileData.address}</p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <h2 className="text-xl mb-6">Contact Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">Owner Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.ownerName}
                      onChange={(e) => setEditData({ ...editData, ownerName: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <p className="text-gray-900">{profileData.ownerName}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm text-gray-600 mb-2 block flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editData.email}
                      onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <p className="text-gray-900">{profileData.email}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm text-gray-600 mb-2 block flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Mobile
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editData.mobile}
                      onChange={(e) => setEditData({ ...editData, mobile: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <p className="text-gray-900">{profileData.mobile}</p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* HSN Codes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl">Product Categories (HSN)</h2>
                <button
                  onClick={() => navigate("/hsn-setup")}
                  className="text-indigo-600 hover:text-indigo-700 text-sm flex items-center gap-1"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
              </div>

              <div className="space-y-3">
                {hsnCodes.map((hsn, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border border-indigo-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">{hsn.code}</span>
                      </div>
                      <span className="text-gray-900">{hsn.keyword}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>


        </div>
      </div>
    </div>
  );
}
