import matplotlib.pyplot as plt
import numpy as np

# Create some data
x = np.linspace(0.0, 3.0, 100)  # Creates 100 points from 0 to 3
y = np.sin(2*np.pi*x)  # Creates sine wave data

# Create the plot
plt.plot(x, y)

# Add labels and title
plt.xlabel('X')
plt.ylabel('Y')
plt.title('Sine Wave')

# Display the plot
plt.show()
