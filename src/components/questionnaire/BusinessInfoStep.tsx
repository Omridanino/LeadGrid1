import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
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

export const BusinessInfoStep = ({
  formData,
  updateFormData,
  open,
  setOpen,
}: BusinessInfoStepProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSelect = (value: string) => {
    updateFormData("businessType", value);
    setOpen(false);
  };

  const filteredProfessions = professions.filter((profession) =>
    profession.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="businessName" className="text-white font-semibold">
          שם העסק *
        </Label>
        <Input
          id="businessName"
          value={formData.businessName}
          onChange={(e) => updateFormData("businessName", e.target.value)}
          className="bg-gray-700 border-gray-600 text-white"
          placeholder="לדוגמה: קפה דלוקס"
        />
      </div>

      <div>
        <Label htmlFor="businessType" className="text-white font-semibold">
          סוג העסק / המקצוע *
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
            >
              {formData.businessType
                ? professions.find((profession) => profession.value === formData.businessType)?.label ||
                  formData.businessType
                : "בחר מקצוע..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0 bg-gray-800 border-gray-600" style={{ zIndex: 9999 }}>
            <Command className="bg-gray-800">
              <CommandInput
                placeholder="חפש מקצוע..."
                className="h-9 bg-gray-800 border-none text-white placeholder:text-gray-400"
                onValueChange={setSearchValue}
              />
              <CommandList className="max-h-60 overflow-y-auto bg-gray-800">
                <CommandEmpty className="text-gray-400 p-4 text-center">
                  לא נמצא מקצוע מתאים.
                </CommandEmpty>
                <CommandGroup className="bg-gray-800">
                  {filteredProfessions.map((profession) => (
                    <CommandItem
                      key={profession.value}
                      value={profession.label}
                      onSelect={() => handleSelect(profession.value)}
                      className="text-white hover:bg-gray-700 cursor-pointer bg-gray-800 data-[selected=true]:bg-gray-700"
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
                  {/* הצגת מקצוע חופשי אם לא נמצא ברשימה */}
                  {searchValue &&
                    !professions.some((p) =>
                      p.label.toLowerCase() === searchValue.toLowerCase()
                    ) && (
                      <CommandItem
                        value={searchValue}
                        onSelect={() => handleSelect(searchValue)}
                        className="text-white italic bg-gray-800 hover:bg-gray-700"
                      >
                        השתמש במקצוע: "{searchValue}"
                      </CommandItem>
                    )}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <p className="text-sm text-gray-400 mt-1">
          בחר את המקצוע שלך מהרשימה או חפש / הזן ידנית
        </p>
      </div>

      <div>
        <Label htmlFor="targetAudience" className="text-white font-semibold">
          קהל היעד
        </Label>
        <Textarea
          id="targetAudience"
          value={formData.targetAudience}
          onChange={(e) => updateFormData("targetAudience", e.target.value)}
          className="bg-gray-700 border-gray-600 text-white"
          placeholder="תאר את קהל היעד שלך (גיל, תחומי עניין, צרכים...)"
          rows={3}
        />
      </div>
    </div>
  );
};

