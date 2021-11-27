export const getTypeColor = (type: string): string => {
  const values: any = {
    primary: '#ffffff',
    secondary: '#ffffff',
  };

  return values[type] || '#4d2a74';
};

export const getTypeBackgroundColor = (type: string): string => {
  const values: any = {
    primary: '#4d2a74',
    secondary: '#23cdfd',
  };

  return values[type] || '#ffffff';
};

export const getTypeBackgroundColorHover = (type: string): string => {
  const values: any = {
    primary: '#3d215c',
    secondary: '#14a4cc',
  };

  return values[type] || '#f0f0f0';
};
