import React from 'react';

const prtgData = {
  objid: 43895,
  name: "_ADN::MSAG 0315 DGC.ZTE.Around Airline Residents GurdShola.EAAZ.AA IP::10.109.199.60 CAP::1000000 Kbps_",
  status: "Unusual",
  tags: "bandwidthsensor snmptrafficsensor BW_315 BW_EAAZ ZN::EAAZ NEW-AD BW_ALL",
  device: "YK_CS_A",
  downtime: "0.1590%",
  downtimetime: "14 h 8 m",
  uptime: "99.8410%",
  uptimetime: "369 d",
  message:
    '<div class="status">1 hour interval average of 0.08 Mbit/s (Traffic In) is unusually low for this hour of the week<div class="moreicon"></div></div>',
  lastup: "1/15/2025 3:52:02 PM",
  lastcheck: "1/15/2025 3:52:02 PM",
  comments: "Ethernet",
};

const StatusDisplay: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl p-6 bg-gray-100 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">PRTG Data Overview</h1>
        <div className="space-y-4">
          {/* Name */}
          <div>
            <h2 className="font-semibold text-gray-700">Name:</h2>
            <p className="text-gray-800">{prtgData.name}</p>
          </div>

          {/* Status */}
          <div>
            <h2 className="font-semibold text-gray-700">Status:</h2>
            <p className={`font-bold ${prtgData.status === "Unusual" ? "text-red-500" : "text-green-500"}`}>
              {prtgData.status}
            </p>
          </div>

          {/* Device */}
          <div>
            <h2 className="font-semibold text-gray-700">Device:</h2>
            <p className="text-gray-800">{prtgData.device}</p>
          </div>

          {/* Uptime and Downtime */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="font-semibold text-gray-700">Uptime:</h2>
              <p className="text-gray-800">{prtgData.uptime} ({prtgData.uptimetime})</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-700">Downtime:</h2>
              <p className="text-gray-800">{prtgData.downtime} ({prtgData.downtimetime})</p>
            </div>
          </div>

          {/* Last Update and Check */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="font-semibold text-gray-700">Last Up:</h2>
              <p className="text-gray-800">{prtgData.lastup}</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-700">Last Check:</h2>
              <p className="text-gray-800">{prtgData.lastcheck}</p>
            </div>
          </div>

          {/* Comments */}
          <div>
            <h2 className="font-semibold text-gray-700">Comments:</h2>
            <p className="text-gray-800">{prtgData.comments}</p>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default StatusDisplay;
