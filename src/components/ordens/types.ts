
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

// Extending the jsPDF type to include jspdf-autotable functionality
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
    previousAutoTable: any;
    lastAutoTable: any;
    // Remove the conflicting 'internal' property declaration
    getNumberOfPages: () => number;
  }
}

// Export necessary types that are used by other components
export interface ServiceItem {
  id: string;
  description: string;
  quantity: number;
  price: number;
  code: string;
  name: string;
  productId?: string;
}

export interface CustomerInfoProps {
  customer: {
    name: string;
    address: string;
    city: string;
    state: string;
    document: string;
    postal_code: string;
    email?: string | null;
    phone?: string | null;
    id?: string;
    created_at: string;
    updated_at: string;
    created_by?: string | null;
  };
}

export interface ProductInfoProps {
  product: {
    name: string;
    model: string;
    id?: string;
    description?: string | null;
    maintenance_interval_days?: number | null;
    created_at?: string;
    updated_at?: string;
    created_by?: string | null;
  };
  customerProduct: {
    installation_date: string | null;
    next_maintenance_date?: string | null;
  } | null;
}

export interface OrderHeaderProps {
  order: {
    id: string;
  };
  handlePrint: () => void;
  handleDownloadPDF: () => void;
  onBack: () => void;
}

export interface OrdemServicoViewProps {
  order: {
    id: string;
    title: string;
    created_at: string;
    scheduled_date: string | null;
    status: string;
    assigned_to: string | null;
    created_by: string | null;
    customer_id: string;
    customer_product_id: string | null;
    description: string | null;
    completed_date: string | null;
    updated_at: string;
  };
  customer: {
    name: string;
    address: string;
    city: string;
    state: string;
    document: string;
    postal_code: string;
    email?: string | null;
    phone?: string | null;
    created_at: string;
    updated_at: string;
    id?: string;
    created_by?: string | null;
  };
  product: {
    name: string;
    model: string;
    id?: string;
    description?: string | null;
    maintenance_interval_days?: number | null;
    created_at?: string;
    updated_at?: string;
    created_by?: string | null;
  } | null;
  customerProduct: {
    id: string;
    installation_date: string | null;
    customer_id: string;
    product_id: string;
    next_maintenance_date: string | null;
    notes: string | null;
    created_at: string;
    updated_at: string;
    created_by: string | null;
  } | null;
  serviceItems: ServiceItem[];
  onBack: () => void;
  onDelete?: (id: string) => void;
}

export interface ServiceItemsProps {
  serviceItems: ServiceItem[];
}

export interface SignatureFieldProps {
  title: string;
  signature: string | null;
  onSign?: () => void;
}

// Helper function to format dates consistently
export const formatDate = (date: string | Date | null): string => {
  if (!date) return '-';
  
  try {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString('pt-BR');
  } catch (error) {
    console.error("Error formatting date:", error);
    return '-';
  }
};
