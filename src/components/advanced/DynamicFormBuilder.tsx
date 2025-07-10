
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Trash2, Plus, GripVertical } from 'lucide-react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface FormField {
  id: string;
  type: 'text' | 'email' | 'phone' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'file' | 'date' | 'number';
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
}

interface DynamicFormBuilderProps {
  onFormChange: (formData: any) => void;
  currentForm: any;
}

export const DynamicFormBuilder = ({ onFormChange, currentForm }: DynamicFormBuilderProps) => {
  const [fields, setFields] = useState<FormField[]>(currentForm?.fields || []);
  const [formSettings, setFormSettings] = useState({
    title: currentForm?.title || 'טופס יצירת קשר',
    submitText: currentForm?.submitText || 'שלח',
    successMessage: currentForm?.successMessage || 'תודה! הטופס נשלח בהצלחה',
    redirectUrl: currentForm?.redirectUrl || '',
    emailNotifications: currentForm?.emailNotifications || true,
    autoResponse: currentForm?.autoResponse || true,
    autoResponseSubject: currentForm?.autoResponseSubject || 'תודה על פנייתך',
    autoResponseMessage: currentForm?.autoResponseMessage || 'קיבלנו את הודעתך ונחזור אליך בהקדם.',
    webhookUrl: currentForm?.webhookUrl || '',
    crmIntegration: currentForm?.crmIntegration || 'none'
  });

  const fieldTypes = [
    { value: 'text', label: 'טקסט' },
    { value: 'email', label: 'אימייל' },
    { value: 'phone', label: 'טלפון' },
    { value: 'textarea', label: 'טקסט רב-שורתי' },
    { value: 'select', label: 'רשימה נפתחת' },
    { value: 'checkbox', label: 'תיבת סימון' },
    { value: 'radio', label: 'בחירה יחידה' },
    { value: 'file', label: 'העלאת קובץ' },
    { value: 'date', label: 'תאריך' },
    { value: 'number', label: 'מספר' }
  ];

  const crmOptions = [
    { value: 'none', label: 'ללא' },
    { value: 'salesforce', label: 'Salesforce' },
    { value: 'hubspot', label: 'HubSpot' },
    { value: 'pipedrive', label: 'Pipedrive' },
    { value: 'monday', label: 'Monday.com' },
    { value: 'zoho', label: 'Zoho CRM' },
    { value: 'mailchimp', label: 'Mailchimp' },
    { value: 'activecampaign', label: 'ActiveCampaign' },
    { value: 'getresponse', label: 'GetResponse' }
  ];

  const addField = () => {
    const newField: FormField = {
      id: `field_${Date.now()}`,
      type: 'text',
      label: 'שדה חדש',
      required: false
    };
    const updatedFields = [...fields, newField];
    setFields(updatedFields);
    updateForm(updatedFields);
  };

  const updateField = (fieldId: string, updates: Partial<FormField>) => {
    const updatedFields = fields.map(field => 
      field.id === fieldId ? { ...field, ...updates } : field
    );
    setFields(updatedFields);
    updateForm(updatedFields);
  };

  const removeField = (fieldId: string) => {
    const updatedFields = fields.filter(field => field.id !== fieldId);
    setFields(updatedFields);
    updateForm(updatedFields);
  };

  const updateForm = (updatedFields?: FormField[]) => {
    onFormChange({
      ...formSettings,
      fields: updatedFields || fields
    });
  };

  const updateFormSettings = (key: string, value: any) => {
    const updatedSettings = { ...formSettings, [key]: value };
    setFormSettings(updatedSettings);
    onFormChange({
      ...updatedSettings,
      fields
    });
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const reorderedFields = Array.from(fields);
    const [removed] = reorderedFields.splice(result.source.index, 1);
    reorderedFields.splice(result.destination.index, 0, removed);
    
    setFields(reorderedFields);
    updateForm(reorderedFields);
  };

  return (
    <div className="space-y-6">
      {/* Form Settings */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">הגדרות טופס</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-white">כותרת הטופס</Label>
            <Input
              value={formSettings.title}
              onChange={(e) => updateFormSettings('title', e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div>
            <Label className="text-white">טקסט כפתור שליחה</Label>
            <Input
              value={formSettings.submitText}
              onChange={(e) => updateFormSettings('submitText', e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div>
            <Label className="text-white">הודעת הצלחה</Label>
            <Textarea
              value={formSettings.successMessage}
              onChange={(e) => updateFormSettings('successMessage', e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
              rows={2}
            />
          </div>

          <div>
            <Label className="text-white">URL להפניה אחרי שליחה (אופציונלי)</Label>
            <Input
              value={formSettings.redirectUrl}
              onChange={(e) => updateFormSettings('redirectUrl', e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
              placeholder="https://example.com/thank-you"
            />
          </div>

          <div className="flex items-center justify-between">
            <Label className="text-white">התראות אימייל</Label>
            <Switch
              checked={formSettings.emailNotifications}
              onCheckedChange={(checked) => updateFormSettings('emailNotifications', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label className="text-white">מענה אוטומטי</Label>
            <Switch
              checked={formSettings.autoResponse}
              onCheckedChange={(checked) => updateFormSettings('autoResponse', checked)}
            />
          </div>

          {formSettings.autoResponse && (
            <>
              <div>
                <Label className="text-white">נושא מענה אוטומטי</Label>
                <Input
                  value={formSettings.autoResponseSubject}
                  onChange={(e) => updateFormSettings('autoResponseSubject', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div>
                <Label className="text-white">תוכן מענה אוטומטי</Label>
                <Textarea
                  value={formSettings.autoResponseMessage}
                  onChange={(e) => updateFormSettings('autoResponseMessage', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  rows={3}
                />
              </div>
            </>
          )}

          <div>
            <Label className="text-white">Webhook URL (Zapier/אינטגרציות)</Label>
            <Input
              value={formSettings.webhookUrl}
              onChange={(e) => updateFormSettings('webhookUrl', e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
              placeholder="https://hooks.zapier.com/hooks/catch/..."
            />
          </div>

          <div>
            <Label className="text-white">אינטגרציית CRM</Label>
            <Select 
              value={formSettings.crmIntegration} 
              onValueChange={(value) => updateFormSettings('crmIntegration', value)}
            >
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600">
                {crmOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="text-white">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Form Fields */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            שדות הטופס
            <Button onClick={addField} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-1" />
              הוסף שדה
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="form-fields">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                  {fields.map((field, index) => (
                    <Draggable key={field.id} draggableId={field.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="p-4 bg-gray-700 rounded-lg border border-gray-600"
                        >
                          <div className="flex items-center gap-2 mb-4">
                            <div {...provided.dragHandleProps}>
                              <GripVertical className="w-4 h-4 text-gray-400" />
                            </div>
                            <Select 
                              value={field.type} 
                              onValueChange={(value) => updateField(field.id, { type: value as any })}
                            >
                              <SelectTrigger className="w-40 bg-gray-600 border-gray-500 text-white">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-gray-600 border-gray-500">
                                {fieldTypes.map((type) => (
                                  <SelectItem key={type.value} value={type.value} className="text-white">
                                    {type.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => removeField(field.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="text-white">תווית השדה</Label>
                              <Input
                                value={field.label}
                                onChange={(e) => updateField(field.id, { label: e.target.value })}
                                className="bg-gray-600 border-gray-500 text-white"
                              />
                            </div>

                            <div>
                              <Label className="text-white">טקסט מציין מקום</Label>
                              <Input
                                value={field.placeholder || ''}
                                onChange={(e) => updateField(field.id, { placeholder: e.target.value })}
                                className="bg-gray-600 border-gray-500 text-white"
                              />
                            </div>
                          </div>

                          {(field.type === 'select' || field.type === 'radio') && (
                            <div className="mt-4">
                              <Label className="text-white">אפשרויות (מופרדות בפסיקים)</Label>
                              <Input
                                value={field.options?.join(', ') || ''}
                                onChange={(e) => updateField(field.id, { 
                                  options: e.target.value.split(',').map(opt => opt.trim()).filter(Boolean)
                                })}
                                className="bg-gray-600 border-gray-500 text-white"
                                placeholder="אפשרות 1, אפשרות 2, אפשרות 3"
                              />
                            </div>
                          )}

                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Switch
                                checked={field.required}
                                onCheckedChange={(checked) => updateField(field.id, { required: checked })}
                              />
                              <Label className="text-white text-sm">שדה חובה</Label>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </CardContent>
      </Card>
    </div>
  );
};
