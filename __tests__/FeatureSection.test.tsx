// featureSection.test.tsx
import { render, screen } from '@testing-library/react';
import FeatureSection from '@/components/app/feature/feature';
import '@testing-library/jest-dom/extend-expect';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

jest.mock('../src/data/main/mainPage', () => ({
  featureIcons: [
    {
      svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
      </svg>,
    },
  ],
  featureItems: [
    {
      icon: <div>Mock Icon</div>,
      title: 'Mock Feature Title',
      description: 'Mock Feature Description',
    },
    {
      icon: <div>Mock Icon 1</div>,
      title: 'Mock Feature Title 1',
      description: 'Mock Feature Description 1',
    },
    {
      icon: <div>Mock Icon 2</div>,
      title: 'Mock Feature Title 2',
      description: 'Mock Feature Description 2',
    },
  ],
}));

describe('FeatureSection', () => {
  it('renders the feature section with the correct data', () => {
    render(<FeatureSection />);
    
    // Example assertions for the initial state
    expect(screen.getByText(/Explore our/i)).toBeInTheDocument();
    
    // Mocked feature item data
    const mockedFeatureItem: FeatureItem = {
      icon: <div>Mock Icon</div>,
      title: 'Mock Feature Title',
      description: 'Mock Feature Description',
    };

    // Check if the feature item is rendered
    expect(screen.getByText(mockedFeatureItem.title)).toBeInTheDocument();
    expect(screen.getByText(mockedFeatureItem.description)).toBeInTheDocument();
    // Add more assertions based on your initial state
  });

  // Add more test cases for other components, interactions, and edge cases as needed
});
