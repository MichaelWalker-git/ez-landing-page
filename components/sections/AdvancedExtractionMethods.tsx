'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ExtractionMethodCard from '@/components/ExtractionMethodCard';
import { useState } from 'react';

const EXTRACTION_METHODS = {
  TEXT: 'Text',
  FORM: 'Form',
  TABLE: 'Table',
  QUESTION: 'Question',
  SUMMARY: 'Summary',
};

const EXTRACTION_METHODS_IMAGES = {
  [EXTRACTION_METHODS.TEXT]: '/images/extraction-methods/text.png',
  [EXTRACTION_METHODS.FORM]: '/images/extraction-methods/form.png',
  [EXTRACTION_METHODS.TABLE]: '/images/extraction-methods/table.png',
  [EXTRACTION_METHODS.QUESTION]: '/images/extraction-methods/qa.png',
};

export default function AdvancedExtractionMethods() {
  const [selectedMethod, setSelectedMethod] = useState(EXTRACTION_METHODS.TEXT);

  return (
    <section id="extraction-methods" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-slate-100 text-slate-500 hover:bg-slate-100">
                DATA EXTRACTION
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Advanced Data Extraction Methods
              </h2>
              <p className="text-slate-600">
                We support multiple extraction methods to meet your needs. Automate document
                processing and get precise results with minimal effort.
              </p>
            </div>

            <div className="space-y-6">
              <ExtractionMethodCard
                isSelected={selectedMethod === EXTRACTION_METHODS.TEXT}
                onClick={() => setSelectedMethod(EXTRACTION_METHODS.TEXT)}
                name="Text"
                icon="/icons/notes.svg"
                description="Extracts all readable text from a document for further processing or analysis."
              />
              <ExtractionMethodCard
                onClick={() => setSelectedMethod(EXTRACTION_METHODS.FORM)}
                isSelected={selectedMethod === EXTRACTION_METHODS.FORM}
                name="Form"
                description="Recognizes and structures form data, automatically identifying key fields like names, dates, and
                                    document numbers."
                icon="/icons/view-agenda.svg"
              />
              <ExtractionMethodCard
                onClick={() => setSelectedMethod(EXTRACTION_METHODS.TABLE)}
                isSelected={selectedMethod === EXTRACTION_METHODS.TABLE}
                name="Table"
                description="Extracts table data while preserving its structure, including columns and rows."
                icon="/icons/calendar-view.svg"
              />
              <ExtractionMethodCard
                onClick={() => setSelectedMethod(EXTRACTION_METHODS.QUESTION)}
                isSelected={selectedMethod === EXTRACTION_METHODS.QUESTION}
                name="Question"
                description="Ask a question about the document, and the system will find and provide the most relevant answer."
                icon="/icons/question-answer.svg"
              />
              <ExtractionMethodCard
                isSelected={selectedMethod === EXTRACTION_METHODS.SUMMARY}
                name="Summary"
                description="After analyzing the system provides a structured summary with key points by page and section."
                icon="/icons/view-list.svg"
                comingSoon
              />

              <Button variant="outline" className="flex items-center gap-2">
                See it in action
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="p-3">
            <Image
              src={EXTRACTION_METHODS_IMAGES[selectedMethod]}
              alt="Document example"
              width={576}
              height={766}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
