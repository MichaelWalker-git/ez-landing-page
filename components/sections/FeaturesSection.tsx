import { Badge } from '@/components/ui/badge';
import { FileCheck, RefreshCw, Settings } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-slate-100 text-slate-500 hover:bg-slate-100">EZPAPERWORK</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            How EzPaperwork Helps You?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-44">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 rounded-lg bg-emerald-50">
                <FileCheck className="h-10 w-10 text-emerald-500" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-slate-900">High Accuracy & Human Review</h3>
            <p className="text-slate-600">
              Achieve precise data extraction with advanced AI models. For critical data, seamlessly
              integrate human review to ensure maximum accuracy and reliability
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
              Save time by automatically extracting key information from structured and unstructured
              documents, eliminating manual input and reducing errors
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
              Effortlessly handle multiple documents at once. Process large batches, extract data
              from different formats, and streamline document management
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
