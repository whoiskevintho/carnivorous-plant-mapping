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
    alpha,
    Chip,
    Radio,
    RadioGroup,
    FormControl
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

export default function LayerPanel({ 
    layerGroups, 
    layers, 
    groups, 
    toggleLayer, 
    toggleGroup,
    selectedSubspecies = [],
    onSubspeciesSelect,
    activeSource,
    onSourceChange
}) {
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

    const handleSubspeciesClick = (subspeciesId) => {
        if (onSubspeciesSelect) {
            onSubspeciesSelect(subspeciesId);
        }
    };

    const isSubspeciesSelected = (subspeciesId) => {
        return selectedSubspecies.includes(subspeciesId);
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
                                            component="div"
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
                                        <Box
                                            component="span"
                                            onClick={(e) => handleInfoClick(group, e)}
                                            sx={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: 32,
                                                height: 32,
                                                borderRadius: '50%',
                                                color: greenTheme.primaryDark,
                                                cursor: 'pointer',
                                                transition: 'background-color 0.2s',
                                                '&:hover': {
                                                    backgroundColor: alpha(greenTheme.primary, 0.2)
                                                }
                                            }}
                                        >
                                            <InfoOutlinedIcon fontSize="small" />
                                        </Box>
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
                                    {/* Distribution Sources */}
                                    {group.sources && group.sources.length > 0 && (
                                        <Box sx={{ mb: 2 }}>
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: greenTheme.text,
                                                    mb: 1,
                                                    display: 'block'
                                                }}
                                            >
                                                Distribution Sources:
                                            </Typography>
                                            <FormControl>
                                                <RadioGroup
                                                    value={activeSource?.[group.id] || group.sources[0]?.id}
                                                    onChange={(e) => onSourceChange?.(group.id, e.target.value)}
                                                >
                                                    {group.sources.map((source) => (
                                                        <FormControlLabel
                                                            key={source.id}
                                                            value={source.id}
                                                            control={
                                                                <Radio
                                                                    size="small"
                                                                    sx={{
                                                                        color: greenTheme.primary,
                                                                        '&.Mui-checked': {
                                                                            color: greenTheme.primaryDark,
                                                                        },
                                                                    }}
                                                                />
                                                            }
                                                            label={
                                                                <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                                                                    {source.name} ({source.year})
                                                                </Typography>
                                                            }
                                                        />
                                                    ))}
                                                </RadioGroup>
                                            </FormControl>
                                            <Divider sx={{ my: 1.5, backgroundColor: alpha(greenTheme.primary, 0.15) }} />
                                        </Box>
                                    )}

                                    {/* Subspecies/Varieties as Chips */}
                                    {group.children && group.children.length > 0 && (
                                        <Box>
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: greenTheme.text,
                                                    mb: 1,
                                                    display: 'block'
                                                }}
                                            >
                                                Subspecies & Varieties:
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                {group.children.map((layer) => {
                                                    const isSelected = isSubspeciesSelected(layer.id);
                                                    const varietyColor = layer.color || group.color; // Use variety's color, fallback to group color
                                                    return (
                                                        <Chip
                                                            key={layer.id}
                                                            label={layer.name}
                                                            onClick={() => handleSubspeciesClick(layer.id)}
                                                            onDelete={layer.info ? (e) => {
                                                                e.stopPropagation();
                                                                setSelectedSpecies(layer);
                                                            } : undefined}
                                                            deleteIcon={layer.info ? <InfoOutlinedIcon fontSize="small" /> : undefined}
                                                            variant={isSelected ? "filled" : "outlined"}
                                                            sx={{
                                                                backgroundColor: isSelected ? varietyColor : 'transparent',
                                                                borderColor: varietyColor,
                                                                color: isSelected ? 'white' : greenTheme.text,
                                                                fontWeight: isSelected ? 600 : 400,
                                                                fontSize: '0.8rem',
                                                                boxShadow: isSelected ? `0 0 12px ${alpha(varietyColor, 0.6)}` : 'none',
                                                                transition: 'all 0.3s ease',
                                                                '&:hover': {
                                                                    backgroundColor: isSelected ? varietyColor : alpha(varietyColor, 0.1),
                                                                    boxShadow: `0 0 8px ${alpha(varietyColor, 0.4)}`,
                                                                },
                                                                '& .MuiChip-deleteIcon': {
                                                                    color: isSelected ? 'white' : greenTheme.textSecondary,
                                                                    '&:hover': {
                                                                        color: isSelected ? alpha('#fff', 0.8) : greenTheme.primaryDark,
                                                                    }
                                                                }
                                                            }}
                                                        />
                                                    );
                                                })}
                                            </Box>
                                        </Box>
                                    )}
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