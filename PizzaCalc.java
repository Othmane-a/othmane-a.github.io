public class Pizza {
	
    private double diameter;  // Diameter of the pizza
    private int slices;       // Number of slices

    public Pizza(double diameter) {
        this.diameter = diameter;  
        this.slices = 4;      // Initialize and default number of slices to 4
    }

    // Method to set the number of slices
    public void setSlices(int newSlices) {
        if (newSlices > slices) {
            slices = newSlices;	// Update the number of slices
            System.out.println("We cut the pizza");
        } else {
            System.out.println("It is already cut in smaller pieces");
        }
    }
    
    // Describing the pizza
    public String describePizza() {
        return "Size: " + diameter + ", Slices: " + slices;
    }

    // Calculate area of one slice
    public double areaPerSlice() {
        double totalArea = Math.PI * Math.pow(diameter / 2, 2);  // Calculate the total area of the pizza
        return totalArea / slices;
    }

    // Display pizza slice message
    public void displaySlices() {
        for (int i = 1; i <= slices; i++) {
            System.out.println("Slice " + i + " is delicious!");
        }
    }
}