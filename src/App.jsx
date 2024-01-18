import React, { useState } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, Text, Modal } from 'react-native';

const App = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const data = [
    { id: 1, time: '10:00 AM', available: true },
    { id: 2, time: '11:00 AM', available: true },
    // Add more time slots as needed
  ];

  const handleSlotPress = (index) => {
    if (data[index].available) {
      setSelectedSlot(index);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // Perform form validation, e.g., check if name and email are not empty
    if (formData.name && formData.email) {
      // Update availability status
      data[selectedSlot].available = false;
      setConfirmationVisible(true);
    } else {
      // Display validation error to the user
      alert('Please fill in all fields.');
    }
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleSlotPress(index)} disabled={!item.available}>
            <Text>{item.time} - {item.available ? 'Available' : 'Booked'}</Text>
          </TouchableOpacity>
        )}
      />

      <TextInput
        placeholder="Name"
        value={formData.name}
        onChangeText={(text) => handleInputChange('name', text)}
      />
      <TextInput
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => handleInputChange('email', text)}
      />

      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>

      <Modal visible={confirmationVisible}>
        <View>
          <Text>Confirmation Message</Text>
          {/* Display additional details or actions if needed */}
          <TouchableOpacity onPress={() => setConfirmationVisible(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default App;
