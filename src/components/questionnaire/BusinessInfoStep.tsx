
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { professions } from "@/constants/professions";

interface BusinessInfoStepProps {
  formData: {
    businessName: string;
    businessType: string;
    targetAudience: string;
  };
  updateFormData: (field: string, value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const BusinessInfoStep = ({ formData, updateFormData, open, setOpen }: BusinessInfoStepProps) => {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="businessName" className="text-white font-semibold">שם העסק *</Label>
        <Input
          id="businessName"
          value={formData.businessName}
          onChange={(e) => updateFormData('businessName', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white"
          placeholder="לדוגמה: קפה דלוקס"
        />
      </div>
      
      <div>
        <Label htmlFor="businessType" className="text-white font-semibold">סוג העסק / המקצוע *</Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
            >
              {formData.businessType
                ? professions.find((profession) => profession.value === formData.businessType)?.label
                : "בחר מקצוע..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[400px] p-0 bg-gray-800 border-gray-600 z-[100]">
            <Command className="bg-gray-800 border-0">
              <CommandInput 
                placeholder="חפש מקצוע..." 
                className="h-9 text-white bg-gray-800 border-gray-600 placeholder:text-gray-400" 
              />
              <CommandList className="max-h-[200px] overflow-y-auto">
                <CommandEmpty className="text-gray-400 p-4 text-center">לא נמצא מקצוע מתאים.</CommandEmpty>
                <CommandGroup>
                  {professions.map((profession) => (
                    <CommandItem
                      key={profession.value}
                      value={profession.value}
                      onSelect={(currentValue) => {
                        updateFormData('businessType', currentValue === formData.businessType ? "" : currentValue);
                        setOpen(false);
                      }}
                      className="text-white hover:bg-gray-700 cursor-pointer px-2 py-1.5"
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          formData.businessType === profession.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {profession.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <p className="text-sm text-gray-400 mt-1">בחר את המקצוע שלך מהרשימה או חפש</p>
      </div>

      <div>
        <Label htmlFor="targetAudience" className="text-white font-semibold">קהל היעד</Label>
        <Textarea
          id="targetAudience"
          value={formData.targetAudience}
          onChange={(e) => updateFormData('targetAudience', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white"
          placeholder="תאר את קהל היעד שלך (גיל, תחומי עניין, צרכים...)"
          rows={3}
        />
      </div>
    </div>
  );
};
