import cv2
import numpy as np
from sklearn.cluster import KMeans
import sys

def extract_colors(image_path, k=5):
    try:
        img = cv2.imread(image_path)
        if img is None:
            print("Could not read image")
            return

        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img = img.reshape((img.shape[0] * img.shape[1], 3))

        clt = KMeans(n_clusters=k)
        clt.fit(img)

        colors = clt.cluster_centers_
        
        print("Dominant colors (RGB):")
        for color in colors:
            print(f"RGB: {color.astype(int)} - Hex: #{int(color[0]):02x}{int(color[1]):02x}{int(color[2]):02x}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    image_path = "public/assets/q5.png"
    extract_colors(image_path)
