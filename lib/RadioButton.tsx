import React from 'react';
import { PixelRatio, Pressable, StyleSheet, Text, View } from 'react-native';

import { RadioButtonProps } from './types';

export default function RadioButton({
  borderColor,
  color = '#444',
  containerStyle,
  description,
  descriptionStyle,
  disabled = false,
  id,
  label,
  labelStyle,
  layout = 'row',
  onPress,
  selected = false,
  size = 24,
  borderSize = 2,
  testId,
}: RadioButtonProps) {

  const borderWidth = PixelRatio.roundToNearestPixel(borderSize);
  const sizeHalf = PixelRatio.roundToNearestPixel(size * 0.5);
  const sizeFull = PixelRatio.roundToNearestPixel(size);

  let orientation: any = { flexDirection: 'row' };
  let margin: any = { marginLeft: 10 };

  if (layout === 'column') {
    orientation = { alignItems: 'center' };
    margin = { marginTop: 10 };
  }

  function handlePress() {
    if (disabled) {
      return null;
    }
    if (onPress) {
      onPress(id);
    }
  }

  return (
    <>
      <Pressable
        testID={testId ? `${testId}_button_${id}` : `test_id_radio_button_${id}`}
        onPress={handlePress}
        style={[
          styles.container,
          orientation,
          { opacity: disabled ? 0.2 : 1 },
          containerStyle,
        ]}>
        <View
         testID={testId ? `${testId}_button_border_${id}` : `test_id_radio_button_border_${id}`}
          style={[
            styles.border,
            {
              borderColor: borderColor || color,
              borderWidth,
              width: sizeFull,
              height: sizeFull,
              borderRadius: sizeHalf,
            },
          ]}>
          {selected && (
            <View
            testID={testId ? `${testId}_button_view_${id}` : `test_id_radio_button_view_${id}`}
              style={{
                backgroundColor: color,
                width: sizeHalf,
                height: sizeHalf,
                borderRadius: sizeHalf,
              }}
            />
          )}
        </View>
        {Boolean(label) && <Text style={[margin, labelStyle]}  testID={testId ? `${testId}_button_label_${id}` : `test_id_radio_button_label_${id}`}>{label}</Text>}
      </Pressable>
      {Boolean(description) && <Text style={[margin, descriptionStyle]} testID={testId ? `${testId}_button_description_${id}` : `test_id_radio_button_description_${id}`}>{description}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  border: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
