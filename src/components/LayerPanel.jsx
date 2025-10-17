import { useState } from 'react';
import {
  Paper,
  Typography,
  Checkbox,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Divider,
  alpha
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LayersIcon from '@mui/icons-material/Layers';

const greenTheme = {
  primary: '#66bb6a',      // Light green
  primaryDark: '#4caf50',  // Medium green
  primaryLight: '#e8f5e9', // Very light green
  background: '#f1f8f4',   // Subtle green tint
  text: '#2e7d32',         // Dark green
  textSecondary: '#81c784' // Light green text
};

export default function LayerPanel({ layerGroups, layers, groups, toggleLayer, toggleGroup }) {
  const [expandedGroups, setExpandedGroups] = useState(
    layerGroups.reduce((acc, group) => ({ ...acc, [group.id]: true }), {})
  );

  const handleAccordionChange = (groupId) => (event, isExpanded) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupId]: isExpanded
    }));
  };

  const isGroupVisible = (groupId) => {
    return groups.find(g => g.id === groupId)?.visible ?? true;
  };

  return (
    <Paper
      elevation={3}
      sx={{
        position: 'absolute',
        top: 16,
        right: 16,
        minWidth: 300,
        maxWidth: 350,
        maxHeight: '90vh',
        overflowY: 'auto',
        backgroundColor: greenTheme.background,
        borderTop: `4px solid ${greenTheme.primary}`,
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: greenTheme.primaryLight,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: greenTheme.primary,
          borderRadius: '4px',
        }
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          backgroundColor: greenTheme.primaryLight,
          borderBottom: `2px solid ${greenTheme.primary}`
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
          <LayersIcon sx={{ color: greenTheme.primaryDark }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: greenTheme.text,
              fontSize: '1.1rem'
            }}
          >
            Sarracenia Distribution
          </Typography>
        </Box>
        <Typography
          variant="caption"
          sx={{ color: alpha(greenTheme.text, 0.7) }}
        >
          Toggle species and varieties
        </Typography>
      </Box>

      {/* Layer Groups */}
      <Box sx={{ p: 1.5 }}>
        {layerGroups.map((group, index) => {
          const isExpanded = expandedGroups[group.id];
          const isVisible = isGroupVisible(group.id);
          
          return (
            <Accordion
              key={group.id}
              expanded={isExpanded}
              onChange={handleAccordionChange(group.id)}
              sx={{
                mb: 1.5,
                backgroundColor: 'white',
                borderRadius: '8px !important',
                border: `1px solid ${greenTheme.primaryLight}`,
                boxShadow: isExpanded 
                  ? `0 2px 8px ${alpha(greenTheme.primary, 0.15)}`
                  : 'none',
                '&:before': {
                  display: 'none',
                },
                '&.Mui-expanded': {
                  margin: '0 0 12px 0',
                }
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: greenTheme.primaryDark }} />
                }
                sx={{
                  backgroundColor: alpha(greenTheme.primaryLight, 0.5),
                  borderRadius: '8px',
                  minHeight: 48,
                  '&.Mui-expanded': {
                    minHeight: 48,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                  '& .MuiAccordionSummary-content': {
                    margin: '8px 0',
                    alignItems: 'center',
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
                  <Checkbox
                    checked={isVisible}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleGroup(group.id);
                    }}
                    onClick={(e) => e.stopPropagation()}
                    sx={{
                      color: greenTheme.primary,
                      '&.Mui-checked': {
                        color: greenTheme.primaryDark,
                      },
                      padding: '4px'
                    }}
                  />
                  
                  {/* Color indicator */}
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      backgroundColor: group.color,
                      borderRadius: '4px',
                      border: `2px solid ${alpha(group.color, 0.8)}`,
                      boxShadow: `0 2px 4px ${alpha(group.color, 0.3)}`
                    }}
                  />
                  
                  <Typography
                    sx={{
                      fontStyle: 'italic',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      color: isVisible ? greenTheme.text : alpha(greenTheme.text, 0.4)
                    }}
                  >
                    {group.name}
                  </Typography>
                </Box>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  pt: 1,
                  pb: 2,
                  px: 2,
                  backgroundColor: alpha(greenTheme.primaryLight, 0.2)
                }}
              >
                <Box sx={{ pl: 2 }}>
                  {group.children.map((layer, layerIndex) => {
                    const layerState = layers.find(l => l.id === layer.id);
                    const isLayerVisible = layerState?.visible ?? layer.visible;
                    
                    return (
                      <Box key={layer.id}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={isLayerVisible}
                              onChange={() => toggleLayer(layer.id)}
                              disabled={!isVisible}
                              size="small"
                              sx={{
                                color: greenTheme.textSecondary,
                                '&.Mui-checked': {
                                  color: greenTheme.primary,
                                },
                                '&.Mui-disabled': {
                                  color: alpha(greenTheme.text, 0.2)
                                }
                              }}
                            />
                          }
                          label={
                            <Typography
                              variant="body2"
                              sx={{
                                fontSize: '0.875rem',
                                color: isVisible && isLayerVisible 
                                  ? greenTheme.text 
                                  : alpha(greenTheme.text, 0.4)
                              }}
                            >
                              {layer.name}
                            </Typography>
                          }
                          sx={{
                            width: '100%',
                            ml: 0,
                            mr: 0,
                            '& .MuiFormControlLabel-label': {
                              width: '100%'
                            }
                          }}
                        />
                        {layerIndex < group.children.length - 1 && (
                          <Divider 
                            sx={{ 
                              my: 0.5,
                              backgroundColor: alpha(greenTheme.primary, 0.1)
                            }} 
                          />
                        )}
                      </Box>
                    );
                  })}
                </Box>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Paper>
  );
}