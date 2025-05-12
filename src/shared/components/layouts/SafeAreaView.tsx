import { useMemo } from 'react';
import { View, ViewStyle } from 'react-native';
import { Edge, EdgeInsets, SafeAreaViewProps, useSafeAreaInsets } from 'react-native-safe-area-context';

type EdgeMode = 'padding' | 'margin';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
  mode?: EdgeMode;
  edges?: Edge[];
} & Omit<SafeAreaViewProps, 'edges'>;

// Helper to parse version
const SafeAreaView = ({
  children,
  style,
  mode = 'padding',
  edges = ['top', 'right', 'bottom', 'left'],
  ...props
}: Props) => {
  const insets = useSafeAreaInsets();

  const edgeStyle = useMemo(() => createEdgeStyles(mode, edges, insets), [mode, edges, insets]);

  return (
    <View style={[edgeStyle, style]} {...props}>
      {children}
    </View>
  );
};

export default SafeAreaView;

const createEdgeStyles = (mode: EdgeMode, edges: Edge[], insets: EdgeInsets): ViewStyle => {
  if (mode === 'padding') {
    return {
      paddingTop: edges.includes('top') ? insets.top : 0,
      paddingRight: edges.includes('right') ? insets.right : 0,
      paddingBottom: edges.includes('bottom') ? insets.bottom : 0,
      paddingLeft: edges.includes('left') ? insets.left : 0,
    };
  } else {
    return {
      marginTop: edges.includes('top') ? insets.top : 0,
      marginRight: edges.includes('right') ? insets.right : 0,
      marginBottom: edges.includes('bottom') ? insets.bottom : 0,
      marginLeft: edges.includes('left') ? insets.left : 0,
    };
  }
};
