import { create } from 'zustand';

export const useStore = create((set, get) => ({
  // Theme state
  theme: 'dark',
  setTheme: (theme) => set({ theme }),
  
  // Navigation state
  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section }),
  
  // Mobile menu state
  isMobileMenuOpen: false,
  setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
  
  // Loading states
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
  
  // Contact form state
  contactForm: {
    name: '',
    email: '',
    message: '',
  },
  updateContactForm: (field, value) => set((state) => ({
    contactForm: {
      ...state.contactForm,
      [field]: value,
    }
  })),
  resetContactForm: () => set({
    contactForm: {
      name: '',
      email: '',
      message: '',
    }
  }),
  
  // Projects filter
  projectFilter: 'all',
  setProjectFilter: (filter) => set({ projectFilter: filter }),
  
  // Skills animation
  skillsAnimated: false,
  setSkillsAnimated: (animated) => set({ skillsAnimated: animated }),
}));