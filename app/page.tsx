import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  FileSpreadsheet,
  FileCheck,
  MessageSquareText,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Settings,
  RefreshCw,
} from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Effortlessly Transform Unstructured Data into Insights
              </h1>
              <p className="text-lg text-slate-700">
                Automate data extraction, streamline workflows, and power AI-driven decisions — without complex setups
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Input type="email" placeholder="Email" className="max-w-md" />
                <Button className="bg-slate-800 hover:bg-slate-700">Get Free Access</Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-slate-900">Extraction method</h3>
                  <p className="text-sm text-slate-500">Choose the extraction method that best suits your needs.</p>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  <div className="flex flex-col items-center p-3 rounded-lg border border-slate-200">
                    <FileText className="h-5 w-5 text-slate-500 mb-1" />
                    <span className="text-xs text-slate-600">Text</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg border border-slate-200">
                    <FileCheck className="h-5 w-5 text-slate-500 mb-1" />
                    <span className="text-xs text-slate-600">Form</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg border-2 border-emerald-500 bg-emerald-50">
                    <FileSpreadsheet className="h-5 w-5 text-emerald-500 mb-1" />
                    <span className="text-xs text-emerald-700">Table</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg border border-slate-200">
                    <MessageSquareText className="h-5 w-5 text-slate-500 mb-1" />
                    <span className="text-xs text-slate-600">Question</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-slate-600">
                    Choose how to extract table data. Define the structure manually or let the system detect it
                    automatically.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-slate-900">Column Configuration</h3>
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-xs">
                      <span className="text-slate-500">i</span>
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Set column names and data types for accurate extraction. Use predefined structures, create custom
                    ones, or apply templates for consistency.
                  </p>

                  <div className="flex gap-4">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Generate Structure
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <FileCheck className="h-4 w-4" />
                      Select Template
                    </Button>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-sm font-medium text-slate-700">Name</th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-slate-700">Date of Birth</th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-slate-700">Age</th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-slate-700">ID number</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[1, 2, 3, 4].map((row) => (
                          <tr key={row} className="border-t border-slate-200">
                            <td className="px-4 py-3 text-sm text-slate-700 flex items-center gap-2">
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-500">
                                ✓
                              </span>
                              {row === 1 ? "Name" : ""}
                            </td>
                            <td className="px-4 py-3 text-sm text-slate-700">{row === 2 ? "Date of Birth" : ""}</td>
                            <td className="px-4 py-3 text-sm text-slate-700">{row === 3 ? "Age" : ""}</td>
                            <td className="px-4 py-3 text-sm text-slate-700 flex items-center justify-between">
                              {row === 4 ? "ID number" : ""}
                              <span className="text-slate-400">String ▼</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex justify-end">
                    <Button variant="outline">Add Column</Button>
                    <Button variant="outline" className="ml-2">
                      Save as Template
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-slate-100 text-slate-500 hover:bg-slate-100">EZPAPERWORK</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How EzPaperwork Helps You?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-3 rounded-lg bg-emerald-50">
                  <FileCheck className="h-10 w-10 text-emerald-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">High Accuracy & Human Review</h3>
              <p className="text-slate-600">
                Achieve precise data extraction with advanced AI models. For critical data, seamlessly integrate human
                review to ensure maximum accuracy and reliability
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-3 rounded-lg bg-emerald-50">
                  <Settings className="h-10 w-10 text-emerald-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Automated Data Extraction</h3>
              <p className="text-slate-600">
                Save time by automatically extracting key information from structured and unstructured documents,
                eliminating manual input and reducing errors
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-3 rounded-lg bg-emerald-50">
                  <RefreshCw className="h-10 w-10 text-emerald-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Multi-Document Processing</h3>
              <p className="text-slate-600">
                Effortlessly handle multiple documents at once. Process large batches, extract data from different
                formats, and streamline document management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Extraction Methods */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="border-2 border-emerald-500 border-dashed rounded-lg p-6 relative">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Document example"
                    width={400}
                    height={200}
                    className="mb-4"
                  />

                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-slate-700">Extraction accuracy:</span>
                      <span className="text-sm font-medium text-slate-900">85%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-700">Marked all as reviewed</span>
                      <div className="w-10 h-5 bg-slate-200 rounded-full relative">
                        <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="px-2 py-2 text-left text-sm font-medium text-slate-700">Field Name</th>
                        <th className="px-2 py-2 text-left text-sm font-medium text-slate-700">Extracted Value</th>
                        <th className="px-2 py-2 text-left text-sm font-medium text-slate-700">Accuracy</th>
                        <th className="px-2 py-2 text-left text-sm font-medium text-slate-700"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-200">
                        <td className="px-2 py-2 text-sm text-slate-700">Name</td>
                        <td className="px-2 py-2 text-sm text-slate-700">L. V. Beamm</td>
                        <td className="px-2 py-2 text-sm text-slate-700">70%</td>
                        <td className="px-2 py-2 text-sm text-slate-700">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-500">
                            ✓
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 text-sm text-slate-700">Date</td>
                        <td className="px-2 py-2 text-sm text-slate-700">15 Nov 1910</td>
                        <td className="px-2 py-2 text-sm text-slate-700">
                          <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
                            100%
                          </span>
                        </td>
                        <td className="px-2 py-2 text-sm text-slate-700"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-16">
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-slate-100 text-slate-500 hover:bg-slate-100">DATA EXTRACTION</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Advanced Data Extraction Methods</h2>
                <p className="text-slate-600">
                  We support multiple extraction methods to meet your needs. Automate document processing and get
                  precise results with minimal effort.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-4 flex items-start gap-4">
                  <div className="p-2 bg-slate-100 rounded">
                    <FileText className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-1">Text</h3>
                    <p className="text-sm text-slate-600">
                      Extracts all readable text from a document for further processing or analysis.
                    </p>
                  </div>
                </Card>

                <Card className="p-4 flex items-start gap-4">
                  <div className="p-2 bg-slate-100 rounded">
                    <FileCheck className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-1">Form</h3>
                    <p className="text-sm text-slate-600">
                      Recognizes and structures form data, automatically identifying key fields like names, dates, and
                      document numbers.
                    </p>
                  </div>
                </Card>

                <Card className="p-4 flex items-start gap-4">
                  <div className="p-2 bg-slate-100 rounded">
                    <FileSpreadsheet className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-1">Table</h3>
                    <p className="text-sm text-slate-600">
                      Extracts table data while preserving its structure, including columns and rows.
                    </p>
                  </div>
                </Card>

                <Card className="p-4 flex items-start gap-4">
                  <div className="p-2 bg-slate-100 rounded">
                    <MessageSquareText className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-1">Question</h3>
                    <p className="text-sm text-slate-600">
                      Ask a question about the document, and the system will find and provide the most relevant answer.
                    </p>
                  </div>
                </Card>

                <Button className="flex items-center gap-2">
                  See it in action
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
            <h2 className="text-4xl font-bold text-yellow-500">
              Our <br />
              Case <br />
              Studies
            </h2>

            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">FC</span>
                </div>
                <h3 className="font-semibold text-slate-900">Ford Credit</h3>
              </div>
              <div className="mb-4">
                <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100">Financial Services</Badge>
              </div>
              <p className="text-slate-700">
                Manual document processing was slow and error-prone, causing delays in operations. An ExPaperwork
                AI-driven solution automated text extraction, classification, and routing using Textract, Comprehend,
                and A2I, seamlessly integrating with internal systems for improved efficiency and accuracy
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white text-xs font-bold">PD</span>
                </div>
                <h3 className="font-semibold text-slate-900">Porsche Digital</h3>
              </div>
              <div className="mb-4">
                <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100">Manufacturing</Badge>
              </div>
              <p className="text-slate-700">
                Tracking vehicles during transport was a manual and time-consuming process. An automated system was
                implemented to extract shipping manifest data from Excel files using EzPaperwork Textract, map vehicle
                details, and integrate with a third-party API for real-time tracking across trucks and ships
              </p>
            </Card>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <div className="w-2 h-2 rounded-full bg-slate-200"></div>
              <div className="w-2 h-2 rounded-full bg-slate-200"></div>
              <div className="w-2 h-2 rounded-full bg-slate-200"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-emerald-600 rounded-3xl p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Free Access to EzPaperwork</h2>
            <p className="text-lg mb-2 max-w-2xl mx-auto">
              Unlock a free trial of EzPaperwork and explore its key features.
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Simply enter your name and email, and we'll send you access details right away!
            </p>

            <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
              <Input type="text" placeholder="Name" className="bg-white text-slate-900 border-0" />
              <Input type="email" placeholder="Email" className="bg-white text-slate-900 border-0" />
              <Button className="bg-slate-800 hover:bg-slate-700 text-white">Get Started</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

