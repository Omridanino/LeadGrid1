import React, { createContext, useContext, useState, ReactNode } from 'react';

interface EditModeContextType {
  isEditMode: boolean;
  setEditMode: (enabled: boolean) => void;
  selectedElement: string | null;
  setSelectedElement: (id: string | null) => void;
  elementUpdates: Record<string, any>;
  updateElement: (id: string, updates: any) => void;
  deleteElement: (id: string) => void;
  duplicateElement: (id: string) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  saveChanges: () => void;
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

interface EditModeProviderProps {
  children: ReactNode;
  onSave?: (updates: Record<string, any>) => void;
}

export const EditModeProvider: React.FC<EditModeProviderProps> = ({ children, onSave }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [elementUpdates, setElementUpdates] = useState<Record<string, any>>({});
  const [history, setHistory] = useState<Record<string, any>[]>([{}]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const setEditMode = (enabled: boolean) => {
    setIsEditMode(enabled);
    if (!enabled) {
      setSelectedElement(null);
    }
  };

  const updateElement = (id: string, updates: any) => {
    const newUpdates = {
      ...elementUpdates,
      [id]: { ...elementUpdates[id], ...updates }
    };
    setElementUpdates(newUpdates);
    addToHistory(newUpdates);
  };

  const deleteElement = (id: string) => {
    const newUpdates = {
      ...elementUpdates,
      [id]: { ...elementUpdates[id], deleted: true }
    };
    setElementUpdates(newUpdates);
    addToHistory(newUpdates);
    
    if (selectedElement === id) {
      setSelectedElement(null);
    }
  };

  const duplicateElement = (id: string) => {
    const originalElement = elementUpdates[id];
    if (originalElement) {
      const newId = `${id}_copy_${Date.now()}`;
      const newUpdates = {
        ...elementUpdates,
        [newId]: { ...originalElement, duplicatedFrom: id }
      };
      setElementUpdates(newUpdates);
      addToHistory(newUpdates);
    }
  };

  const addToHistory = (newState: Record<string, any>) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newState);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setElementUpdates(history[newIndex]);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setElementUpdates(history[newIndex]);
    }
  };

  const saveChanges = () => {
    if (onSave) {
      onSave(elementUpdates);
    }
    // ניקוי ההיסטוריה אחרי שמירה
    setHistory([elementUpdates]);
    setHistoryIndex(0);
  };

  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;

  const value: EditModeContextType = {
    isEditMode,
    setEditMode,
    selectedElement,
    setSelectedElement,
    elementUpdates,
    updateElement,
    deleteElement,
    duplicateElement,
    undo,
    redo,
    canUndo,
    canRedo,
    saveChanges
  };

  return (
    <EditModeContext.Provider value={value}>
      {children}
    </EditModeContext.Provider>
  );
};

export const useEditMode = () => {
  const context = useContext(EditModeContext);
  if (context === undefined) {
    throw new Error('useEditMode must be used within an EditModeProvider');
  }
  return context;
};

export default EditModeProvider;