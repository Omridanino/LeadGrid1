import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Edit, Save, X } from 'lucide-react';

interface InlineEditorProps {
  formData: any;
  onUpdate: (updatedData: any) => void;
  content: any;
  onContentUpdate: (updatedContent: any) => void;
}

const InlineEditor = ({ formData, onUpdate, content, onContentUpdate }: InlineEditorProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingElement, setEditingElement] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Function to inject editing capabilities into the iframe
  const injectEditingScript = () => {
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentDocument) return;

    const doc = iframe.contentDocument;
    
    // Add editing styles
    const style = doc.createElement('style');
    style.textContent = `
      .editable-element {
        position: relative;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      
      .editable-element:hover {
        outline: 2px dashed #3b82f6;
        outline-offset: 2px;
      }
      
      .editable-element.editing {
        outline: 2px solid #10b981;
        outline-offset: 2px;
        background: rgba(16, 185, 129, 0.1);
      }
      
      .edit-overlay {
        position: absolute;
        top: -30px;
        right: 0;
        background: #1f2937;
        border: 1px solid #374151;
        border-radius: 4px;
        padding: 4px;
        display: flex;
        gap: 4px;
        z-index: 1000;
      }
      
      .edit-btn {
        background: #3b82f6;
        color: white;
        border: none;
        padding: 4px 8px;
        border-radius: 2px;
        cursor: pointer;
        font-size: 12px;
      }
      
      .edit-btn:hover {
        background: #2563eb;
      }
    `;
    doc.head.appendChild(style);

    // Make elements editable
    const editableSelectors = [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
      'p', 'span', 'div.text-content',
      '.hero-title', '.hero-subtitle',
      '.feature-title', '.feature-description',
      '.testimonial-text', '.testimonial-name'
    ];

    editableSelectors.forEach(selector => {
      const elements = doc.querySelectorAll(selector);
      elements.forEach((element, index) => {
        const htmlElement = element as HTMLElement;
        if (htmlElement.textContent?.trim()) {
          htmlElement.classList.add('editable-element');
          htmlElement.setAttribute('data-edit-type', selector);
          htmlElement.setAttribute('data-edit-index', index.toString());
          
          // Add click handler for editing
          htmlElement.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            startEditing(htmlElement);
          });
        }
      });
    });
  };

  const startEditing = (element: HTMLElement) => {
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentDocument) return;

    // Clear previous editing states
    iframe.contentDocument.querySelectorAll('.editing').forEach(el => {
      el.classList.remove('editing');
      el.removeAttribute('contenteditable');
    });

    // Remove previous overlays
    iframe.contentDocument.querySelectorAll('.edit-overlay').forEach(el => el.remove());

    // Set current element as editing
    element.classList.add('editing');
    element.setAttribute('contenteditable', 'true');
    element.focus();

    // Create edit overlay
    const overlay = iframe.contentDocument.createElement('div');
    overlay.className = 'edit-overlay';
    overlay.innerHTML = `
      <button class="edit-btn save-btn">שמור</button>
      <button class="edit-btn cancel-btn">ביטול</button>
    `;

    element.style.position = 'relative';
    element.appendChild(overlay);

    const originalText = element.textContent || '';
    setEditingElement(element.getAttribute('data-edit-type') + '-' + element.getAttribute('data-edit-index'));

    // Save button handler
    overlay.querySelector('.save-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      saveEdit(element, originalText);
    });

    // Cancel button handler
    overlay.querySelector('.cancel-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      cancelEdit(element, originalText);
    });

    // Save on Enter, cancel on Escape
    element.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        saveEdit(element, originalText);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        cancelEdit(element, originalText);
      }
    });
  };

  const saveEdit = (element: HTMLElement, originalText: string) => {
    const newText = element.textContent || '';
    const editType = element.getAttribute('data-edit-type');
    const editIndex = element.getAttribute('data-edit-index');

    // Update formData based on the edited element
    if (editType && formData) {
      const updatedFormData = { ...formData };
      
      // Map element types to formData properties
      if (editType.includes('h1') || element.classList.contains('hero-title')) {
        updatedFormData.headline = newText;
        updatedFormData.businessName = newText;
      } else if (editType.includes('hero-subtitle') || element.classList.contains('hero-subtitle')) {
        updatedFormData.subheadline = newText;
        updatedFormData.description = newText;
      }
      
      onUpdate(updatedFormData);
    }

    // Clean up editing state
    element.classList.remove('editing');
    element.removeAttribute('contenteditable');
    element.querySelector('.edit-overlay')?.remove();
    setEditingElement(null);
  };

  const cancelEdit = (element: HTMLElement, originalText: string) => {
    element.textContent = originalText;
    element.classList.remove('editing');
    element.removeAttribute('contenteditable');
    element.querySelector('.edit-overlay')?.remove();
    setEditingElement(null);
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      // Delay injection to allow iframe to load
      setTimeout(injectEditingScript, 100);
    }
  };

  // Re-inject script when iframe content changes
  useEffect(() => {
    if (isEditing && iframeRef.current) {
      const iframe = iframeRef.current;
      iframe.onload = () => {
        setTimeout(injectEditingScript, 100);
      };
    }
  }, [isEditing]);

  return (
    <div className="relative w-full h-full">
      {/* Edit Mode Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <Button
          onClick={toggleEditMode}
          variant={isEditing ? "destructive" : "default"}
          size="sm"
          className="shadow-lg"
        >
          {isEditing ? (
            <>
              <X className="w-4 h-4 mr-2" />
              יציאה מעריכה
            </>
          ) : (
            <>
              <Edit className="w-4 h-4 mr-2" />
              עריכת דף
            </>
          )}
        </Button>
      </div>

      {/* Instructions when in edit mode */}
      {isEditing && (
        <div className="absolute top-16 right-4 z-50 bg-black/80 text-white p-3 rounded-lg text-sm max-w-xs">
          <p>לחץ על טקסט כלשהו בדף כדי לערוך אותו</p>
        </div>
      )}
    </div>
  );
};

export default InlineEditor;