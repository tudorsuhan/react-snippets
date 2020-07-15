import React from "react"

const SectionHeader = ({ sectionTitle, sectionDescription }) => (
  <>
    <div style={styles.sectionTitle}>{sectionTitle}</div>
    <p style={styles.sectionDescription}>{sectionDescription}</p>
  </>
)

export default SectionHeader

const styles = {
  sectionTitle: {
    width: 408,
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 700,
  },
  sectionDescription: {
    width: 373,
    color: "#C4C4C4",
    marginBottom: 64,
  },
}
