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
    IconButton,
    alpha
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LayersIcon from '@mui/icons-material/Layers';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SpeciesInfoDialog from './SpeciesInfoDialog';

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
        layerGroups.reduce((acc, group) => ({ ...acc, [group.id]: false }), {})
    );
    const [selectedSpecies, setSelectedSpecies] = useState(null);

    const handleAccordionChange = (groupId) => (event, isExpanded) => {
        setExpandedGroups(prev => ({
            ...prev,
            [groupId]: isExpanded
        }));
    };

    const isGroupVisible = (groupId) => {
        return groups.find(g => g.id === groupId)?.visible ?? true;
    };

    const handleInfoClick = (group, event) => {
        event.stopPropagation();
        setSelectedSpecies(group);
    };

    return (
        <>
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
                    scrollbarGutter: 'stable',
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
                                        {/* Species Layer Checkbox - independent, not a group toggle */}
                                        {group.type && group.dataUrl && (
                                            <Checkbox
                                                checked={layers.find(l => l.id === group.id)?.visible ?? group.visible}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    toggleLayer(group.id);
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
                                        )}

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
                                                color: greenTheme.text,
                                                flex: 1
                                            }}
                                        >
                                            {group.name}
                                            {group.commonName && (
                                                <Typography
                                                    component="div"
                                                    sx={{
                                                        fontStyle: 'normal',
                                                        fontWeight: 400,
                                                        fontSize: '0.8rem',
                                                        color: alpha(greenTheme.text, 0.7),
                                                        mt: 0.25
                                                    }}
                                                >
                                                    {group.commonName}
                                                </Typography>
                                            )}
                                        </Typography>

                                        {/* Info Button */}
                                        <IconButton
                                            size="small"
                                            onClick={(e) => handleInfoClick(group, e)}
                                            sx={{
                                                color: greenTheme.primaryDark,
                                                '&:hover': {
                                                    backgroundColor: alpha(greenTheme.primary, 0.2)
                                                }
                                            }}
                                        >
                                            <InfoOutlinedIcon fontSize="small" />
                                        </IconButton>
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
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                        {/* Checkbox */}
                                                        <Checkbox
                                                            checked={isLayerVisible}
                                                            onChange={() => toggleLayer(layer.id)}
                                                            size="small"
                                                            sx={{
                                                                color: greenTheme.textSecondary,
                                                                '&.Mui-checked': {
                                                                    color: greenTheme.primary,
                                                                },
                                                                padding: '4px'
                                                            }}
                                                        />

                                                        {/* Color indicator box */}
                                                        <Box
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                backgroundColor: group.color,
                                                                borderRadius: '3px',
                                                                border: `1.5px solid ${alpha(group.color, 0.8)}`,
                                                                boxShadow: `0 1px 3px ${alpha(group.color, 0.3)}`,
                                                                flexShrink: 0
                                                            }}
                                                        />

                                                        {/* Label */}
                                                        <Box sx={{ flex: 1 }}>
                                                            <Typography
                                                                variant="body2"
                                                                sx={{
                                                                    fontSize: '0.875rem',
                                                                    color: greenTheme.text
                                                                }}
                                                            >
                                                                {layer.name}
                                                                {layer.commonName && (
                                                                    <Typography
                                                                        component="span"
                                                                        sx={{
                                                                            display: 'block',
                                                                            fontSize: '0.75rem',
                                                                            fontStyle: 'normal',
                                                                            color: alpha(greenTheme.text, 0.6),
                                                                            mt: 0.25
                                                                        }}
                                                                    >
                                                                        {layer.commonName}
                                                                    </Typography>
                                                                )}
                                                            </Typography>
                                                        </Box>

                                                        {/* Info Button for Variety */}
                                                        {layer.info && (
                                                            <IconButton
                                                                size="small"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setSelectedSpecies(layer);
                                                                }}
                                                                sx={{
                                                                    color: greenTheme.textSecondary,
                                                                    padding: '4px',
                                                                    '&:hover': {
                                                                        backgroundColor: alpha(greenTheme.primary, 0.15),
                                                                        color: greenTheme.primaryDark
                                                                    }
                                                                }}
                                                            >
                                                                <InfoOutlinedIcon fontSize="small" sx={{ fontSize: '16px' }} />
                                                            </IconButton>
                                                        )}
                                                    </Box>

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

            {/* Species Info Dialog */}
            <SpeciesInfoDialog
                open={!!selectedSpecies}
                species={selectedSpecies}
                onClose={() => setSelectedSpecies(null)}
            />
        </>
    );
}